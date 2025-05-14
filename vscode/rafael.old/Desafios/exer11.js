alert("Seja bem-vindo a Mini Calculadora!")
function tratarBotao(){
let num1 = Number(prompt ("Digite um número"))
let num2 = Number(prompt ("Digite outro número"))
let operacao = Number(prompt("Escolha uma operação: \n1 - Soma, \n2 - Multiplicação, \n3 - Divisão, \n4 - Subtração"))
let resultado
if(operacao == 1){
    resultado = num1 + num2
    console.log("A soma dos dois números é igual: " + resultado)
    }else if(operacao == 2){
    resultado = num1 * num2
    console.log("O resultado da multiplicação é igual: " + resultado)
    }else if(operacao == 3){
    resultado = num1 / num2
    console.log("O resultado da divisão é igual: " + resultado)
    }else if(operacao == 4){
    resultado = num1 - num2
    console.log("O resultado da divisão é igual: " + resultado)
    }else{
    console.log("Digite uma operação válida.")
    }
}
