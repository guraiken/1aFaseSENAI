//3) Faça um programa que solicite o salário e os anos de serviço de um funcionário. 
//Se ele tiver mais de 5 anos de serviço, dê um bônus de 5% sobre o salário.
programa {
  funcao inicio() {
    real salario, bonusSalario
    inteiro anosServico

    escreva("Digite seu salário: ")
    leia(salario)
    escreva("Digite seus anos por serviço: ")
    leia(anosServico)
    
    bonusSalario = salario * 1.05
    
    se(anosServico < 5){
    escreva("Seu salário é: (R$)" + salario)
    
    }
    
      se(anosServico >= 5){
      escreva("\nVocê esteve há mais de 5 anos e tem bonus de serviço.\n Seu salário é: (R$)" + bonusSalario)

      }
    
    
  }
}
