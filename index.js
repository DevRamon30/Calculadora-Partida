// Função que calcula o saldo e define o nível do jogador
function calculaRank(vitorias, derrotas) {
    // Calcula o saldo de vitórias (vitórias - derrotas)
    let saldoVitorias = vitorias - derrotas;
    let nivel;
  
    // Define o nível com base na quantidade de vitórias
    if (vitorias <= 10) {
      nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
      nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
      nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
      nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
      nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
      nivel = "Lendário";
    } else { // vitorias >= 101
      nivel = "Imortal";
    }
    
    // Retorna a mensagem formatada
    return `O Herói tem de saldo de ${saldoVitorias} e está no nível de ${nivel}`;
  }
  
  // Testando a função para um jogador com 100 vitórias (e, por exemplo, 20 derrotas)
  const resultado = calculaRank(100, 20);
  console.log(resultado);
  
  