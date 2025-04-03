programa {
  funcao inicio() {
    inteiro categoria
    real valorCompra

    escreva("Código | " + " Categoria          |   Desconto", "  |\n")
    escreva("-------------------------------------------", "|")
    escreva("\n  01   | " + " Normal             |      2% ", "    |")
    escreva("\n  02   | " + " Special            |      3% ", "    |")
    escreva("\n  03   | " + " Special+           |      5% ", "    |")
    escreva("\n  04   | " + " Special+ Platinum  |      10% ", "   |")
    escreva("\n  05   | " + " Platinum Super     |      15% ", "   |")
    escreva("\n  06   | " + " Platinum Mega      |      20% ", "   |")
    escreva("\n  07   | " + " Parente do Dono    |      50% ", "   |")
    escreva("\n-------------------------------------------", "-\n")

    escreva("\nDigite qual a sua categoria: ")
    leia(categoria)
    se(categoria > 07){
      escreva("Digite um número válido, por favor.")
    }senao{
      escreva("Digite o valor da sua compra (R$):")
    leia(valorCompra)

    escolha(categoria){
      caso 01 ou 1: 
      valorCompra = valorCompra * 0.98
      escreva("\nSua compra ficou (R$):" + valorCompra + " com 2% de desconto!")
      pare 
      caso 02 ou 2:
      valorCompra = valorCompra * 0.97
      escreva("\nSua compra ficou (R$):" + valorCompra + " com 3% de desconto!")
      pare
      caso 03 ou 3:
      valorCompra = valorCompra * 0.95
      escreva("\nSua compra ficou (R$): " + valorCompra + " com 5% de desconto!")
      pare
      caso 04 ou 4:
      valorCompra = valorCompra * 0.90
      escreva("\nSua compra ficou (R$): " + valorCompra + " com 10% de desconto!")
      pare
      caso 05 ou 6:
      valorCompra = valorCompra * 0.85
      escreva("\nSua compra ficou (R$): " + valorCompra + " com 15% de desconto!")
      pare
      caso 06 ou 6:
      valorCompra = valorCompra * 0.80
      escreva("\nSua compra ficou (R$): " + valorCompra + " com 20% de desconto!")
      pare
      caso 07 ou 7:
      valorCompra = valorCompra * 0.50
      escreva("\nSua compra ficou (R$): " + valorCompra + " com 50% de desconto!")
      pare
      caso contrario:
      escreva("Por favor digite um código de categoria válido.")
    }
    
    }
  }
}
