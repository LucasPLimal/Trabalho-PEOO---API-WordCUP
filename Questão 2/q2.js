// QUESTÃO: Fazer uma requisição para a API e exibir os detalhes de um jogo específico.
const matches = 'https://worldcupjson.net/matches';
fetch(matches)
  .then(response => response.json())
  .then(matches => list_matches(matches));

function list_matches(matches) {
  let select = document.getElementById('match');
  for (let match of matches) {
    let option = new Option(match.home_team.name + " VS " + match.away_team.name , match.id);
    select.options[select.options.length] = option;
  }
}

function mostrar_matches() {
let id = document.getElementById('match').value;
let match = `https://worldcupjson.net/matches/${id}`;

fetch(match)
    .then(response => response.json())
    .then(matches => displayMatches(matches))

function displayMatches(matches){
    const matchesList = document.getElementById("match-details")
    matchesList.innerHTML = ""
    
        const matchElement = document.createElement('div');
        matchElement.innerHTML = `
        <h2><b>Detalhes Gerais:</b></h2>
        <p><b>ID:</b> ${matches.id}</p>
        <p><b>Estádio:</b> ${matches.venue}, ${matches.location}</p>
        <p><b>Status:</b> ${matches.status}</p>
        <p><b>Público:</b> ${matches.attendance}</p>
        <p><b>Fase:</b> ${matches.stage_name}</p>
        <p><b>Equipe da Casa:</b> ${matches.home_team_country}</p>
        <p><b>Equipe Visitante:</b> ${matches.away_team_country}</p>
        <p><b>Data e Hora:</b> ${matches.datetime}</p>
        <p><b>Vencedor:</b> ${matches.winner}</p>
        <p><b>Sigla do Vencedor:</b> ${matches.winner_code}</p>
        
        <h2>Equipe da Casa:</h2>
        <p><b>País:</b> ${matches.home_team.country}</p>
        <p><b>Nome:</b> ${matches.home_team.name}</p>
        <p><b>Gols:</b> ${matches.home_team.goals}</p>
        <p><b>Pênaltis:</b> ${matches.home_team.penalties}</p>
        
        <h2>Equipe Visitante:</h2>
        <p><b>País:</b> ${matches.away_team.country}</p>
        <p><b>Nome:</b> ${matches.away_team.name}</p>
        <p><b>Gols:</b> ${matches.away_team.goals}</p>
        <p><b>Pênaltis:</b> ${matches.away_team.penalties}</p>
        
        <h2>Clima:</h2>
        <p><b>Umidade:</b> ${matches.weather.humidity}%</p>
        <p><b>Temperatura (Celsius):</b> ${matches.weather.temp_celsius}°C</p>
        <p><b>Temperatura (Fahrenheit):</b> ${matches.weather.temp_farenheit}°F</p>
        <p><b>Velocidade do Vento:</b> ${matches.weather.wind_speed} km/h</p>
        <p><b>Descrição:</b> ${matches.weather.description}</p>
        
        <h2>Tempo:</h2>
        <p><b>Tempo:</b> ${matches.time}</p>
        <p><b>Tempo Atual:</b> ${matches.detailed_time.current_time}</p>
        <p><b>Primeiro Tempo:</b> ${matches.detailed_time.first_half_time}</p>
        <p><b>Extra Tempo do Primeiro Tempo:</b> ${matches.detailed_time.first_half_extra_time}</p>
        <p><b>Segundo Tempo:</b> ${matches.detailed_time.second_half_time}</p>
        <p><b>Extra Tempo do Segundo Tempo:</b> ${matches.detailed_time.second_half_extra_time}</p>
        
        <h2>Árbitros:</h2>
        <ul>
          <li><b>Nome:</b> ${matches.officials[0].name} - <b>Função:</b> ${matches.officials[0].role} - <b>País:</b> ${matches.officials[0].country}</li>
          <li><b>Nome:</b> ${matches.officials[1].name} - <b>Função:</b> ${matches.officials[1].role} - <b>País:</b> ${matches.officials[1].country}</li>
          <li><b>Nome:</b> ${matches.officials[2].name} - <b>Função:</b> ${matches.officials[2].role} - <b>País:</b> ${matches.officials[2].country}</li>
          <li><b>Nome:</b> ${matches.officials[3].name} - <b>Função:</b> ${matches.officials[3].role} - <b>País:</b> ${matches.officials[3].country}</li>
          <li><b>Nome:</b> ${matches.officials[4].name} - <b>Função:</b> ${matches.officials[4].role} - <b>País:</b> ${matches.officials[4].country}</li>
          <li><b>Nome:</b> ${matches.officials[5].name} - <b>Função:</b> ${matches.officials[5].role} - <b>País:</b> ${matches.officials[5].country}</li>
          <li><b>Nome:</b> ${matches.officials[6].name} - <b>Função:</b> ${matches.officials[6].role} - <b>País:</b> ${matches.officials[6].country}</li>
          <li><b>Nome:</b> ${matches.officials[7].name} - <b>Função:</b> ${matches.officials[7].role} - <b>País:</b> ${matches.officials[7].country}</li>
          <li><b>Nome:</b> ${matches.officials[8].name} - <b>Função:</b> ${matches.officials[8].role} - <b>País:</b> ${matches.officials[8].country}</li>
        </ul>
        
        <h2>Eventos da Equipe da Casa:</h2>
        <ul>
          ${matches.home_team_events.map(event => `<li><b>Tipo:</b> ${event.type_of_event} - <b>Jogador:</b> ${event.player} - <b>Tempo:</b> ${event.time}</li>`).join('')}
        </ul>
        
        <h2>Eventos da Equipe Visitante:</h2>
        <ul>
          ${matches.away_team_events.map(event => `<li><b>Tipo:</b> ${event.type_of_event} - <b>Jogador:</b> ${event.player} - <b>Tempo:</b> ${event.time}</li>`).join('')}
        </ul>
        
        <h2>Escalação da Equipe da Casa:</h2>
        <p><b>País:</b> ${matches.home_team_lineup.country}</p>
        <p><b>Tática:</b> ${matches.home_team_lineup.tactics}</p>
        <h3>Títulares</h3>
        <ul>
          ${matches.home_team_lineup.starting_eleven.map(player => `<li><b>Nome:</b> ${player.name} - <b>Número:</b> ${player.shirt_number} - <b>Posição:</b> ${player.position}</li>`).join('')}
        </ul>
        <h3>Reservas</h3>
        <ul>
          ${matches.home_team_lineup.substitutes.map(player => `<li><b>Nome:</b> ${player.name} - <b>Número:</b> ${player.shirt_number} - <b>Posição:</b> ${player.position}</li>`).join('')}
        </ul>
        
        <h2>Escalação da Equipe Visitante:</h2>
        <p><b>País:</b> ${matches.away_team_lineup.country}</p>
        <p><b>Tática:</b> ${matches.away_team_lineup.tactics}</p>
        <h3>Títulares</h3>
        <ul>
          ${matches.away_team_lineup.starting_eleven.map(player => `<li><b>Nome:</b> ${player.name} - <b>Número:</b> ${player.shirt_number} - <b>Posição:</b> ${player.position}</li>`).join('')}
        </ul>
        <h3>Reservas</h3>
        <ul>
          ${matches.away_team_lineup.substitutes.map(player => `<li><b>Nome:</b> ${player.name} - <b>Número:</b> ${player.shirt_number} - <b>Posição:</b> ${player.position}</li>`).join('')}
        </ul>
        
        <h2>Estatísticas da Equipe da Casa:</h2>
        <p><b>País:</b> ${matches.home_team_statistics.country}</p>
        <p><b>Tentativas de Gol:</b> ${matches.home_team_statistics.attempts_on_goal}</p>
        <p><b>Chutes ao Gol Contra:</b> ${matches.home_team_statistics.attempts_on_goal_against}</p>
        <p><b>Chutes no Alvo:</b> ${matches.home_team_statistics.on_target}</p>
        <p><b>Chutes Fora do Alvo:</b> ${matches.home_team_statistics.off_target}</p>
        <p><b>Chutes Bloqueados:</b> ${matches.home_team_statistics.blocked}</p>
        <p><b>Cantos:</b> ${matches.home_team_statistics.corners}</p>
        <p><b>Impedimentos:</b> ${matches.home_team_statistics.offsides}</p>
        <p><b>Número de Passes:</b> ${matches.home_team_statistics.num_passes}</p>
        <p><b>Passes Completados:</b> ${matches.home_team_statistics.passes_completed}</p>
        <p><b>Interceptação:</b> ${matches.home_team_statistics.tackles}</p>
        <p><b>Faltas:</b> ${matches.home_team_statistics.free_kicks}</p>
        <p><b>Goleiros:</b> ${matches.home_team_statistics.goal_kicks}</p>
        <p><b>Pênaltis:</b> ${matches.home_team_statistics.penalties}</p>
        <p><b>Pênaltis Convertidos:</b> ${matches.home_team_statistics.penalties_scored}</p>
        <p><b>Laterais:</b> ${matches.home_team_statistics.throw_ins}</p>
        <p><b>Cartões Amarelos:</b> ${matches.home_team_statistics.yellow_cards}</p>
        <p><b>Cartões Vermelhos:</b> ${matches.home_team_statistics.red_cards}</p>
        <p><b>Faltas Cometidas:</b> ${matches.home_team_statistics.fouls_committed}</p>
        
        <h2>Estatísticas da Equipe Visitante:</h2>
        <p><b>País:</b> ${matches.away_team_statistics.country}</p>
        <p><b>Tentativas ao Gol:</b> ${matches.away_team_statistics.attempts_on_goal}</p>
        <p><b>Chutes ao Gol Contra:</b> ${matches.away_team_statistics.attempts_on_goal_against}</p>
        <p><b>Chutes no Alvo:</b> ${matches.away_team_statistics.on_target}</p>
        <p><b>Chutes Fora do Alvo:</b> ${matches.away_team_statistics.off_target}</p>
        <p><b>Chutes Bloqueados:</b> ${matches.away_team_statistics.blocked}</p>
        <p><b>Cantos:</b> ${matches.away_team_statistics.corners}</p>
        <p><b>Impedimentos:</b> ${matches.away_team_statistics.offsides}</p>
        <p><b>Número de Passes:</b> ${matches.away_team_statistics.num_passes}</p>
        <p><b>Passes Completados:</b> ${matches.away_team_statistics.passes_completed}</p>
        <p><b>Tackles:</b> ${matches.away_team_statistics.tackles}</p>
        <p><b>Faltas:</b> ${matches.away_team_statistics.free_kicks}</p>
        <p><b>Goleiros:</b> ${matches.away_team_statistics.goal_kicks}</p>
        <p><b>Pênaltis:</b> ${matches.away_team_statistics.penalties}</p>
        <p><b>Pênaltis Convertidos:</b> ${matches.away_team_statistics.penalties_scored}</p>
        <p><b>Laterais:</b> ${matches.away_team_statistics.throw_ins}</p>
        <p><b>Cartões Amarelos:</b> ${matches.away_team_statistics.yellow_cards}</p>
        <p><b>Cartões Vermelhos:</b> ${matches.away_team_statistics.red_cards}</p>
        <p><b>Faltas Cometidas:</b> ${matches.away_team_statistics.fouls_committed}</p>
        `
        matchesList.appendChild(matchElement);
        }
      }
