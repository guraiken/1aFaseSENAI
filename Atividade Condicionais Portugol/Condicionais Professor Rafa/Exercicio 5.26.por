// 5.26 - Ponderações(: Faça um programa que receba quatro notas, sendo que
// cada nota só poderá receber valores de 0 a 10, calcule e mostre a média
// ponderada, sabendo que o usuário irá entrar com o peso de cada nota,
// caso a media ponderada seja:
//  Media maior ou igual a 7 – ALUNO APROVADO
//  Media menor que 7 – ALUNO REPROVADO
// <Muleta da compreensão: Ler notas e garantir que são valores válidos;
// Ler o peso de cada prova; Calcular a média; Definir situação do aluno –
// muito semelhante ao que já fizemos sobre a média ponderada, mas agora os
// pesos não serão definidos no programa, e sim digitados pelo usuário>
programa {
  funcao inicio() {
    real nota1, nota2, nota3, nota4, notaPeso1, notaPeso2, notaPeso3, notaPeso4, media
    inteiro diasPresentes, frequencia

    escreva("Digite a primeira nota: ")
    leia(nota1)
    escreva("Digite a segunda nota: ")
    leia(nota2)
    escreva("Digite a terceira nota: ")
    leia(nota3)
    escreva("Digite a quarta nota: ")
    leia(nota4)

    escreva("Digite o peso da primeira nota: ")
    leia(notaPeso1)
    escreva("Digite o peso da segunda nota: ")
    leia(notaPeso2)
    escreva("Digite o peso da terceira nota: ")
    leia(notaPeso3)
    escreva("Digite o peso da quarta nota: ")
    leia(notaPeso4)
    escreva("Digite a quantidade de dias que você foi para a aula: ")
    leia(frequencia)

    media = (notaPeso1 + notaPeso2 + notaPeso3 + notaPeso4) /(nota1 + nota2 + nota3 + nota4)
    
    se(media > 10){
      escreva("Por favor, digite uma nota valida.")
    }senao{
      se(media < 0){
        escreva("A nota não pode ser negativa, digite novamente")
      }senao{
        se(nota1 > 10 ou nota2 > 10 ou nota3 > 10 ou nota4 > 10){
          escreva("Você não pode digitar números acima de 10.")
        }senao{
          se(nota1 < 0 ou nota2 < 0 ou nota3 < 0 ou nota4 < 0){
          }senao{
            se(media >= 7 e frequencia >= 150){
              escreva("Você foi aprovado!")
            }senao{
              se(media < 7 ou frequencia < 150){
                escreva("Você foi reprovado!")
              }
            }
          }
        }
      }
    }
    escreva("Sua média é: " + media)
  }
}
