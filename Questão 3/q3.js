// QUESTÃO: Fazer uma requisição para a API e exibir todos os jogos de uma equipe específica.

const url_teams = 'https://worldcupjson.net/teams';

fetch(url_teams)
  .then(response => response.json())
  .then(teams => list_teams(teams))

function list_teams(teams) {
  let select = document.getElementById('seleção');

  for (let group of teams['groups']) {
    for (let country of group.teams) {
      let option = new Option(country.name, country.country);
      select.options[select.options.length] = option;
    }
  }
}

function listar() {
  const team = document.getElementById('seleção').value;
  const url = `https://worldcupjson.net/matches/country/${team}`;

  fetch(url)
    .then(response => response.json())
    .then(matches => list_matches(matches))
}

function list_matches(matches) {
  let resposta = document.getElementById('resposta');
  resposta.innerHTML = '';

    for (let match of matches) {
      let descrição = document.createElement('div');
      descrição.innerHTML = `
        <p><b>Estádio:</b> ${match.venue}</p>
        <p><b>Localização:</b> ${match.location}</p>
        <p><b>Data:</b> ${match.datetime}</p>
        <p>(<b>Casa:</b> ${match.home_team_country})  x   
        (<b>Visitante:</b> ${match.away_team_country})</p>
        <p><b>Vencedor:</b> ${match.winner}</p>
        <br>`;
      resposta.appendChild(descrição);
    }
  }
