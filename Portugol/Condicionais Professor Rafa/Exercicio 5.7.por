// O albergue utilizas faixas de preço de acordo com o número de diárias
// Até 5 diárias, o preço por diária é R$100,00;
// De 6 a 10 diárias, R$90,00 por dia;
// A partir de 11 dias, sai R$80,00 por dia;
// Criar um programa que lê o número de dias que ele vai ficar no albergue
// e apresente o valor final da conta e sua composição (os detalhes,
// pagamentos, descontos...);

programa {
  funcao inicio() {
    inteiro multa = 150, numerodeDias, diaria
    real desconto = 0.75, valorTotal

    escreva("Quantos dias Juca vai ficar no albergue: ")
    leia(numerodeDias)

    se(numerodeDias <= 5 ){
      diaria = 100
      escreva("Como você ficou " + numerodeDias + " dias, a diária será (R$)100")
    }senao{
      se(numerodeDias >= 6 e numerodeDias <= 10){
        diaria = 90
        escreva("Como você ficou " + numerodeDias + " dias, a diária será (R$)90")
      }senao{
        se(numerodeDias >= 11){
        diaria = 80
        escreva("Como você ficou " + numerodeDias + " dias, a diária será (R$)80")
        }
      }
    }
    valorTotal = (numerodeDias * diaria * desconto) + multa
    escreva("\nVocê vai ficar por: " + numerodeDias + " dias no albergue\n")
    escreva("O valor teve 25% de desconto e mais uma multa adicional de R$ 150\n")
    escreva("O valor total será: " + "(R$)" + valorTotal)
  }
}
