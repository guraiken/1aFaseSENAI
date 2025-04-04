programa {
  funcao inicio() {
    inteiro codigo, quantidade
    real valorComida, precoTotal
    escreva(" Código | Comida         | Valor(R$)\n")
    escreva(" 0100   | Cachorro quente| R$ 1,70\n")
    escreva(" 0101   | Bauru Simples  | R$ 2,30\n")
    escreva(" 0102   | Bauru com Ovo  | R$ 2,60\n")
    escreva(" 0103   | Hamburguer     | R$ 2,40\n")
    escreva(" 0104   | Cheeseburguer  | R$ 2,50\n")
    escreva(" 0105   | Refrigerante   | R$ 1,00\n")
    
    escreva("\nDigite um código de 0100 a 0105: ")
    leia(codigo)

    escolha(codigo){
      caso 100:
      escreva("Digite quantos cachorros quentes você quer: ")
      leia(quantidade)
      valorComida = 1.70
      precoTotal = valorComida * quantidade
      escreva("Você comprará "+quantidade + " cachorro(s) quente(s) por R$ " + precoTotal)
      pare
      caso 101:
      escreva("Digite quantos baurus (simples) você quer: ")
      leia(quantidade)
      valorComida = 2.30
      precoTotal = valorComida * quantidade
      escreva("Você comprará "+quantidade + " bauru(s) por R$ " + precoTotal)
      pare
      caso 102:
      escreva("Digite quantos baurus (com ovo) você quer: ")
      leia(quantidade)
      valorComida = 2.60
      precoTotal = valorComida * quantidade
      escreva("Você comprará "+quantidade + " bauru(s) por R$ " + precoTotal)
      pare
      caso 103:
      escreva("Digite quantos hamburguer(es) você quer: ")
      leia(quantidade)
      valorComida = 2.40
      precoTotal = valorComida * quantidade
      escreva("Você comprará "+quantidade + " hamburguer(es) por R$ " + precoTotal)
      pare   
      caso 104:
      escreva("Digite quantos cheeseburguer(es) você quer: ")
      leia(quantidade)
      valorComida = 2.50
      precoTotal = valorComida * quantidade
      escreva("Você comprará "+quantidade + " cheeseburguer(es) por R$ " + precoTotal)
      pare
      caso 105:
      escreva("Digite quantos refrigerante(s) você quer: ")
      leia(quantidade)
      valorComida = 1.00
      precoTotal = valorComida * quantidade
      escreva("Você comprará "+quantidade + " refrigerante(s) por R$ " + precoTotal)
      pare
      caso contrario:
      escreva("Por favor, digite um código da tabela.")
    }
  }
}