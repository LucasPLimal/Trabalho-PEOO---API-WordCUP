// Faz a requisição para a API
fetch('https://worldcupjson.net/matches')
  .then(response => response.json())
  .then(data => {
    // Encontra o jogo da final
    const finalMatch = data.find(match => match.stage_name === 'Final');
    
    // Verifica se a final ocorreu e exibe os resultados
    if (finalMatch && finalMatch.winner) {
      const champion = finalMatch.winner;
      const homeTeam = finalMatch.home_team.name;
      const awayTeam = finalMatch.away_team.name;
      const viceChampion = homeTeam === champion ? awayTeam : homeTeam;
      
      document.getElementById('resultado').innerHTML = 
        Campeão: ${champion} <br> Vice-Campeão: ${viceChampion};
    } else {
      document.getElementById('resultado').textContent = "A final ainda não ocorreu.";
    }
  })
  .catch(error => {
    document.getElementById('resultado').textContent = "Erro ao obter os dados.";
    console.error('Erro ao obter os dados:', error);
  });
