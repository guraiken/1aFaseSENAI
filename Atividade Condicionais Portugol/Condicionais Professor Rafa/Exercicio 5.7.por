// O albergue utilizas faixas de preço de acordo com o número de diárias
// Até 5 diárias, o preço por diária é R$100,00;
// De 6 a 10 diárias, R$90,00 por dia;
// A partir de 11 dias, sai R$80,00 por dia;
// Criar um programa que lê o número de dias que ele vai ficar no albergue
// e apresente o valor final da conta e sua composição (os detalhes,
// pagamentos, descontos...);


programa {
  funcao inicio() {
    inteiro numeroDias, multa = 150
    real diaria

    escreva("Quantos dias Juca vai ficar no albergue: ")
    leia(numeroDias)
    se(numeroDias <= 5){
      diaria = diaria * 100
    }senao{
      se(numeroDias >= 6){
        diaria = diaria * 90
      }senao{
        se(numeroDias >= 11){
        diaria = diaria * 80
        }senao{
          
          
          escreva("e")
        }
      }
    }

  }
}
