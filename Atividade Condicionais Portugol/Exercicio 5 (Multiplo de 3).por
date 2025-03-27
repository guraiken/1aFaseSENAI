//Desenvolver um programa que receba um número inteiro e verifique se ele é múltiplo de 3. Se sim, mostrar “É múltiplo de 3!”
programa {
  funcao inicio() {
    inteiro div, numero1

    escreva("Digite o número que você quer descobrir se é múltiplo de 3: ")
    leia(numero1)

    div = numero1 % 3

    se(div == 0){
      escreva("É múltiplo de 3!")

    }
  }
}
