programa {
  funcao inicio() {
    //Ler o número do funcionario, horas trabalhadas, e o valor que recebe, o valor que recebe por hora
    //Calcular o salário que recebo por hora
    
    real numeroFuncionario, horasTrabalhadas, valorRecebido, valorPorHora

    escreva("Digite o número do seu crachá: ")
    leia(numeroFuncionario)
    escreva("Digite a quantidade de horas trabalhadas: ")
    leia(horasTrabalhadas)
    escreva("Digite o salário por hora: ")
    leia(valorPorHora)

    valorRecebido = horasTrabalhadas * valorPorHora

    escreva("Empregado N°: " + numeroFuncionario + "\n Salário: (R$): " + valorRecebido)


  }
}
