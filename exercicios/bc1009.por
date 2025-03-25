programa {
  funcao inicio() {
    cadeia nomeVendedor
    real salarioFixo, totalVendasMes, comissao

    escreva("Digite seu nome: ")
    leia(nomeVendedor)
    escreva("Digite o seu salário fixo: (R$) ")
    leia(salarioFixo)
    escreva("Digite o total das vendas por mês: (R$) ")
    leia(totalVendasMes)

    comissao = salarioFixo + (15 * totalVendasMes / 100)

    escreva("NOME: " + nomeVendedor + "\nSalário final = (R$)" + comissao)
    


    
  }
}
