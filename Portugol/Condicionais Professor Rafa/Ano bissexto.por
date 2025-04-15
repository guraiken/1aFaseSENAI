programa {
  funcao inicio() {
    inteiro ano

    escreva("Digite o ano: ")
    leia(ano)
    se(ano % 4 == 0 e ano % 100 != 0 ou ano % 400 == 0){
      escreva("O ano é bissexto.")
    }senao{
      escreva("Não é um ano bissexto.")
    }
  }
}
