//Leia dois valores inteiros, no caso para variáveis A e B. A seguir, calcule a soma entre elas e atribua à variável SOMA. 
// seguir escrever o valor desta variável.

programa {
  funcao inicio() {
    inteiro numero1, numero2, somaResultado
   
    // Leitura do primeiro número
    escreva("Digite o primeiro número da soma: ")
    leia(numero1)
    
    // Leitura do segundo número
    escreva("Digite o segundo número da soma: ")
    leia(numero2)
    
    // Soma do cálculo
    
    somaResultado = numero1 + numero2
    
    // Resultado
    
    escreva("SOMA = " + somaResultado)
  }
}
