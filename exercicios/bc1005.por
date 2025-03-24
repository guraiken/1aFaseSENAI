programa {
  funcao inicio() {
    // Ler primeiro nota
    // Ler segunda nota
    // Atribuir peso das notas
    // Somar as duas
    // Dividir as duas por 2
    
    real nota1, nota2, pesoNota1, pesoNota2, mediaNotas, resultado

    escreva("Digite a primeira nota: ")
    leia(nota1)

    escreva("Digite a segunda nota: ")
    leia (nota2)   

    pesoNota1 = nota1 * 3.5
    pesoNota2 = nota2 * 7.5
    resultado = pesoNota1 + pesoNota2
    mediaNotas = resultado / 11

    escreva("MEDIA = " + mediaNotas)
  }
}
