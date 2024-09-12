const url = 'https://worldcupjson.net/teams';

fetch(url)
    .then(response => response.json())
    .then(classificacao => lista(classificacao));

function lista(classificacao) {
    const tabelas = document.getElementById("tabela");
    
    classificacao.groups.forEach(group => {
        let tabela = document.createElement("table");
        let head = document.createElement("thead");
        let title = document.createElement("h3");

        tabelas.appendChild(title);
        title.innerHTML = `<h3>Grupo ${group.letter}</h3>`;
        
        head.innerHTML = `
            <tr>
                <th>Nome</th>
                <th>Pontos</th>
                <th>Vitórias</th>
                <th>Empates</th>
                <th>Derrotas</th>
                <th>Jogos</th>
                <th>Gols a favor</th>
                <th>Gols contra</th>
                <th>Diferença</th>
            </tr>
        `;
        tabela.appendChild(head);

        // Ordena os times por pontos em ordem decrescente
        group.teams.sort((a, b) => b.group_points - a.group_points);

        group.teams.forEach(team => {
            let line = tabela.insertRow();

            let firstcell = line.insertCell(0);
            firstcell.style.width = "100px";
            firstcell.textContent = team.name;

            line.insertCell(1).textContent = team.group_points;
            line.insertCell(2).textContent = team.wins;
            line.insertCell(3).textContent = team.draws;
            line.insertCell(4).textContent = team.losses;
            line.insertCell(5).textContent = team.games_played;
            line.insertCell(6).textContent = team.goals_for;
            line.insertCell(7).textContent = team.goals_against;
            line.insertCell(8).textContent = team.goal_differential;
        });

        tabela.style.borderWidth = "1px";
        tabela.style.borderColor = "#555";
        tabela.style.borderStyle = "solid";
        tabela.style.background = "#ffefef";
        tabela.style.textAlign = "center";
        tabela.style.width = "100%";

        tabelas.appendChild(tabela);
    });
}
