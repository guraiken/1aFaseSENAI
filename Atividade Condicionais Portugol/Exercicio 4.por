//Crie um programa que peça ao usuário para digitar três notas individualmente (uma por vez), 
//faça a média e caso a média seja igual ou maior que 7, mostre uma mensagem "Aprovado!".
programa {
  funcao inicio() {
    real nota1, nota2, nota3, media

    escreva("Digite a primeira nota: ")
    leia(nota1)
    escreva("Digite a primeira nota: ")
    leia(nota2)
    escreva("Digite a primeira nota: ")
    leia(nota3)

    media = (nota1 + nota2 + nota3) / 3

    se(media >= 7){
      escreva("A média é: " + media + " Aprovado(a)!")

    } 
      se(media < 7){
        escreva("A média é: " + media + " Reprovado(a)!")

      }
    
  }
}
