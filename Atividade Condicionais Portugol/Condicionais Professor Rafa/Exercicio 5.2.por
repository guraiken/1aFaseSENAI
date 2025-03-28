// 5.2// Mano Juca bateu a cabeça e está com problemas de
// raciocínio...
// Está analisando dois números há horas e não consegue
// descobrir qual deles é o maior. Vamos ajuda-lo!
// Crie um algoritmo que leia dois números A e B e imprima o
// maior deles.

programa {
  funcao inicio() {
    inteiro numeroA, numeroB
    escreva ("Digite um número: ")
    leia(numeroA)
    escreva("Digite outro número: ")
    leia(numeroB)
    se(numeroA > numeroB){
    escreva("O número " + numeroA + " é maior!")
  }senao{
      se(numeroB > numeroA){
      escreva("O número " + numeroB + " é maior!")
      }senao{
      (numeroB == numeroA)
      escreva("Os dois números são iguais.")
      }
    }
  }
}
