const url = 'https://worldcupjson.net/teams';

fetch(url)
    .then(response => response.json()) //Puxar o JSON da API
    .then(classificacao => lista(classificacao)); 

function lista(classificacao) {
    const tabelas = document.getElementById("tabela"); //Cria uma constante do elemento HTML "tabela"
    
    classificacao.groups.forEach(group => { //Cria elementos da tabela para cada grupo presente em grupos
        let tabela = document.createElement("table");
        let head = document.createElement("thead");
        let title = document.createElement("h3");

        tabelas.appendChild(title); //Torna a variavel "title" como um elemento de "tabelas"
        title.innerHTML = `<h3>Grupo ${group.letter}</h3>`; //Cria o título de cada tabela
        
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
        `; //Estrutura do cabeçalho tabela
        tabela.appendChild(head); //Torna a variavel "head" como um elemento de "tabela"

        group.teams.sort((a, b) => b.group_points - a.group_points); // Ordena os times por pontos em ordem decrescente

        group.teams.forEach(team => {
            let line = tabela.insertRow(); //Adiciona uma celula(coluna)

            line.insertCell(0).textContent = team.name;
            line.insertCell(1).textContent = team.group_points;
            line.insertCell(2).textContent = team.wins;
            line.insertCell(3).textContent = team.draws;
            line.insertCell(4).textContent = team.losses;
            line.insertCell(5).textContent = team.games_played;
            line.insertCell(6).textContent = team.goals_for;
            line.insertCell(7).textContent = team.goals_against;
            line.insertCell(8).textContent = team.goal_differential; //Adiciona informações da API de acordo com cada coluna do Cabeçalho
        });

        tabela.style.borderWidth = "1px"; //Pixels da borda
        tabela.style.borderColor = "#555"; //Cor da borda
        tabela.style.borderStyle = "solid"; //Tipo da borda
        tabela.style.background = "#ffefef"; //Background
        tabela.style.textAlign = "center"; // Alinhamento do texto
        tabela.style.width = "100%"; //Altera o preenchimento 

        tabelas.appendChild(tabela); //Torna a variavel "tabela" como um elemento de "tabelas"
    });
}
