programa {
  funcao inicio() {
    inteiro numeroSemana
    escreva("Digite um número de 1 a 7: ")
    leia(numeroSemana)
    escolha(numeroSemana){
      caso 1: numeroSemana == 1
      escreva("Domingo")
      pare
      caso 2: numeroSemana == 2
      escreva("Segunda-feira")
      pare
      caso 3: numeroSemana == 3
      escreva("Terça-feira")
      pare
      caso 4: numeroSemana == 4
      escreva("Quarta-feira")
      pare
      caso 5: numeroSemana == 5
      escreva("Quinta-feira")
      pare
      caso 6: numeroSemana == 6
      escreva("Sexta-feira")
      pare
      caso 7: numeroSemana == 7
      escreva("Sábado")
      pare
      caso contrario: 
      escreva("Por favor, digite um número de 1 a 7.")
    }
  }
}
