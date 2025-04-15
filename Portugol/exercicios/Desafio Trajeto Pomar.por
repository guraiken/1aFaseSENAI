// Para poder realizar o primeiro teste de demanda na propriedade, Heitor está contratando pessoas para 
// desenvolver o protótipo do seu caixa de atendimento/pagamento. Este caixa perguntará às pessoas as quantidades 
// colhidas de cada fruta e, de acordo com a tabela de preços, vai apresentar o recibo ao cliente e o valor a ser pago.
programa {
  funcao inicio() {
    inteiro maca, laranja, bergamota, banana, pera
    real macaun, laranjaun, bergamotaun, bananaun, peraun, totalFrutas

    
    escreva("     BEM VINDO A LOJA!\n")
    escreva("     Tabela de preços: \n")
    escreva("Frutas      |  Preço(Un)\n")
    escreva("Maçã        |  R$ (1,50)\n")
    escreva("Laranja     |  R$ (2,00)\n")
    escreva("Bergamota   |  R$ (1,00)\n")
    escreva("Banana      |  R$ (1,20)\n")
    escreva("Pera        |  R$ (0,50)\n")
       
    escreva("Digite quantas maçãs você pegou: ")
    leia(maca)
    escreva("Digite quantas laranjas você pegou: ")
    leia(laranja)
    escreva("Digite quantas bergamotas você pegou: ")
    leia(bergamota)
    escreva("Digite quantas bananas você pegou: ")
    leia(banana)
    escreva("Digite quantas peras você pegou: ")
    leia(pera)
    macaun = maca * 1.50
    laranjaun = laranja * 2
    bananaun = banana * 1.20
    peraun = pera * 0.50
    totalFrutas = macaun + laranjaun + bergamota + bananaun + peraun


    escreva("                 NOTA FISCAL\n")
    escreva("---------------------------------------------------\n")
    escreva("\nMaçã          |  (Un) R$ (1,50) " + " Unidades: " + maca)
    escreva("\nLaranja       |  (Un) R$ (2,00) " + " Unidades: " + laranja)
    escreva("\nBergamota     |  (Un) R$ (1,00) " + " Unidades: " + bergamota)
    escreva("\nBanana        |  (Un) R$ (1,20) " + " Unidades: " + banana)
    escreva("\nPera          |  (Un) R$ (0,50) " + " Unidades: " + pera)
    escreva("\nVALOR TOTAL DOS PRODUTOS: (R$): " + totalFrutas)  
    escreva("\n---------------------------------------------------\n")
  }
}
