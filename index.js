resultadosPartidas (25, 5)

function resultadosPartidas (vitorias, derrotas){
    let vitoria = vitorias-derrotas
    


let nivelDoHeroi

if (vitoria <= 10) {
  nivelDoHeroi = "Ferro"
} else if (vitoria >= 11 && vitoria <= 20) {
  nivelDoHeroi = "Bronze"
} else if (vitoria >= 21 && vitoria <= 50) {
  nivelDoHeroi = "Prata"
} else if (vitoria >= 51 && vitoria <= 80) {
  nivelDoHeroi = "Ouro"
} else if (vitoria >= 81 && vitoria <= 90) {
  nivelDoHeroi = "Diamante"
} else if (vitoria >= 91 && vitoria <= 100) {
  nivelDoHeroi = "Lendário"
} if (vitoria >= 101 ) {
  nivelDoHeroi = "Imortal"
}

console.log(`O jogador tem um saldo de ${vitoria} esta no nível de ${nivelDoHeroi}`)

}