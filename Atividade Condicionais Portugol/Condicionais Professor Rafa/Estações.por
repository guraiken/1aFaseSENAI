// Estação do Ano: Baseado em um mês digitado, determine em qual estação do ano estamos (primavera, verão, outono ou inverno).
programa {
  funcao inicio() {
    inteiro numeroMes

    escreva("Digite o número do mês: ")
    leia(numeroMes)

    se(numeroMes >= 1 e numeroMes <= 2 ou numeroMes == 12){
      escreva("Você está no verão!")
    }senao{
      se(numeroMes >= 3 e numeroMes <= 5){
        escreva("Você está no outono!")
      }senao{
        se(numeroMes >= 6 e numeroMes <= 8){
          escreva("Você está no inverno!")
        }senao{
          se(numeroMes >= 9 e numeroMes <= 11 ){
            escreva("Você está na primavera!")
          }senao{
            se(numeroMes > 12){
              escreva("Por favor digite um número válido.")
            }
          }
        }
      }
    }
    
  }
}
