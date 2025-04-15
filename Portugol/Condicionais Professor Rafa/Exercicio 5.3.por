// 5.3 – Mano Juca enfrenta o rodízio de carros de São Paulo;
// Faça um algoritmo que leia o último número da placa do carro e mostre o
// dia em que ele não pode rodar pela cidade de São Paulo.
// Final 0 ou 1: não pode rodar na segunda-feira;
// Final 2 ou 3: não pode rodar na terça-feira;
// Final 4 ou 5: não pode rodar na quarta-feira;
// Final 6 ou 7: não pode rodar na quinta-feira;
// Final 8 ou 9: não pode rodar na sexta-feira.
programa {
  funcao inicio() {
    inteiro numeroPlaca
    escreva("Digite o último número da sua placa: ")
    leia(numeroPlaca)

    se(numeroPlaca == 0 ou numeroPlaca == 1){
      escreva("Você não pode rodar na segunda-feira.")
    }senao{
      se(numeroPlaca == 2 ou numeroPlaca == 3){
        escreva("Você não pode rodar na terça-feira.")
      }senao{
        se(numeroPlaca == 4 ou numeroPlaca == 5){
          escreva("Você não pode rodar na quarta-feira.")
        }senao{
          se(numeroPlaca == 6 ou numeroPlaca == 7){
            escreva("Você não pode rodar na quinta-feira.")
          }senao{
            se(numeroPlaca == 8 ou numeroPlaca == 9){
              escreva("Você não pode rodar na sexta-feira.")
            }
          }
        }
      }
    } 
  }
}
