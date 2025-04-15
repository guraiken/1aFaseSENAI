// 5.5// Mano Juca é meio tansinho, coitado. Disso vocês já sabem. Mas a
// coisa tem piorado. Um professor inventou de usar o tal do sistema de
// média ponderada, onde cada prova tem um valor (peso) diferente. Nas
// ideia desse professor que não tem pena da ausência de poder de
// processamento mental do Mano Juca cada prova tem o peso:
// - Prova 1: peso 0.4;
// - Prova 2: peso 0.6;
// - Prova 3: peso 1.
// Crie um algoritmo para ler as notas no Mano Juca e calcular a média
// dele, coitado...
// Diga também se o malandro passou (a média no mobral dele é 7,0).
programa {
  funcao inicio() {
    real nota1Juca, nota2Juca, nota3Juca, media
    escreva("Digite a primeira nota: ")
    leia(nota1Juca)
    escreva("Digite a segunda nota: ")
    leia(nota2Juca)
    escreva("Digite a terceira nota: ")
    leia(nota3Juca)
    media = (nota1Juca * 0.4 + nota2Juca * 0.6 + nota3Juca) / 2
    escreva("Sua média foi: " + media)
    se(media >= 7){
      escreva("\nJuca, você foi aprovado!")
    }senao{
      se(media < 7){
        escreva("\nJuca, você não passou e é um miserável :(")
      }
    }
  }
}
