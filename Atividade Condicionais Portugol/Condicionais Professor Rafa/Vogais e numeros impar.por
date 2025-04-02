programa {
  funcao inicio() {
    cadeia vogalENumero

    escreva("Digite uma vogal ou número: ")
    leia(vogalENumero)
    se(vogalENumero == "a" ou vogalENumero == "e" ou vogalENumero == "i" ou vogalENumero == "o" ou vogalENumero == "u"){
        escreva("É uma vogal minúscula.")
    }senao{
      se(vogalENumero == "A" ou vogalENumero == "E" ou vogalENumero == "I" ou vogalENumero == "O" ou vogalENumero == "U"){
      escreva("É uma vogal maiúscula.")
      }senao{
        se(vogalENumero > "a" ou vogalENumero > "A"){
          escreva("É uma consoante.")    
          }senao{
            se(vogalENumero % 2 != 0){
              escreva("É um número ímpar.")
            }senao{
              se(vogalENumero % 2 == 0){
                escreva("É um número par.")
              }
            }
          }
        }
      }   
    }
  }
}
