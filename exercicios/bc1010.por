//Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, 
//o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.
programa {
  funcao inicio() {
    real codigoPeca1, valorPeca1, qntdPeca1, codigoPeca2, valorPeca2, qntdPeca2, resultado

    escreva("Digite o código da primeira peça: ")
    leia(codigoPeca1)
    escreva("Digite o valor da peça (R$): ")
    leia(valorPeca1)
    escreva("Digite a quantidade de peças: ")
    leia(qntdPeca1)

    escreva("Digite o código da segunda peça: ")
    leia(codigoPeca2)
    escreva("Digite o valor da segunda peça (R$): ")
    leia(valorPeca2)
    escreva("Digite a quantidade de peças: ")
    leia(qntdPeca2)

    resultado = (valorPeca1 * qntdPeca1) + (valorPeca2 * qntdPeca2)
    

    escreva("O total das compras será (R$):" + resultado)


  
  
  
  } 
}
