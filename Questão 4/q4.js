// QUESTÃO: Fazer uma requisição para a API e exibir uma tabela de classificação dos grupos da Copa do Mundo.

const url='https://worldcupjson.net/teams'

fetch(url)
    .then(response => response.json())
    .then(classificacao => lista(classificacao))

function lista(classificacao) {
    let resposta = document.getElementById('resposta')
    resposta.innerHTML = ''

    for (let group of classificacao['groups']) {
        for (let classificado of group.teams) {
        let local = document.createElement('div');
        local.innerHTML = 
                          `<p>Nome: ${classificado.name}</p>
                           <p>Grupo: ${classificado.group_letter}</p>
                           <p>Pontos: ${classificado.group_points}</p>
                           <p>Vitórias: ${classificado.wins}</p>
                           <p>Empates: ${classificado.draws}</p>
                           <p>Derrotas: ${classificado.losses}</p>
                           <p>Jogos: ${classificado.games_played}</p>
                           <p>Gols a favor: ${classificado.goals_for}</p>
                           <p>Gols contra: ${classificado.goals_against}</p>
                           <p>Diferença: ${classificado.goal_differential}</p>
                           <br>
                           `
        resposta.appendChild(local)
        }
    }
}