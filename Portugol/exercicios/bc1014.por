programa {
  funcao inicio() {
    //Calcule o consumo médio de um automóvel sendo fornecidos a distância total percorrida (em Km) e o total de combustível gasto
    // (em litros).
    real distanciaKm, totalCombustivel, media

    escreva("Digite a distância percorrida pelo veículo: ")
    leia(distanciaKm)

    escreva("Digite o total gasto de litros de combustivel: ")
    leia(totalCombustivel)

    media = distanciaKm / totalCombustivel

    escreva("A média foi: " + media + "Km/L")
    
  }
}
