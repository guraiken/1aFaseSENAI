// 5.6// Mano Juca tá se aventurando em um novo gamezinho no celular dele.
// Ele tá se divertindo, mas não tem a menor ideia se tá
// mandando bem ou não.
// Crie um algoritmo que leia a pontuação que ele fez e diga
// como ele se saiu, sendo:
// - “Deu ruim”, se pontuação <= 10
// - “Tá... (Acrescente aqui uma frase motivacional)”, se
// pontuação > 10 e pontuação <= 100
// - “Supimpa!”, se pontuação > 100 e pontuação <= 200
// - MITOU!, se pontuação > 200
programa {
  funcao inicio() {
    inteiro pontuacaoJuca

    escreva("Digite qual foi a sua pontuação: ")
    leia(pontuacaoJuca)

    se(pontuacaoJuca <= 10){
    escreva("Deu ruim..")
    }senao{
      se(pontuacaoJuca >10 e pontuacaoJuca <= 100){
        escreva("Tá... você ta quase sendo um ser humano médio")
      }senao{
        se(pontuacaoJuca > 100 e pontuacaoJuca <= 200){
          escreva("Supimpa!")
        }senao{
          se(pontuacaoJuca > 200){
            escreva("MITOU!")
          }
        }
      }
    }
    escreva("\nTente novamente!")
  }   
}
