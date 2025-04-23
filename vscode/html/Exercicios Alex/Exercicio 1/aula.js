function exercicio1(){
    let n1 = Number(prompt("Digite um número:"))
    let n2 = Number(prompt("Digite outro número"))
    let soma = n1 + n2
    alert("A soma dos dois números é: " + soma)
}
function exercicio2(){
    let n1 = Number(prompt("Digite um número:"))
    let n2 = Number(prompt("Digite outro número"))
    let media = (n1 + n2) / 2
    alert("A média dos dois números é: " + media )   
}
function exercicio3(){ // Exercicio de converter graus em fahrenheit.
    let celsius = Number(prompt("Digite a temperatura em celsius: "))
    let fahren = Number (celsius * 9/5) + 32
    alert("A temperatura em fahrenheit vai ser: " + "(F°" + fahren +")" )
}
function exercicio4(){ // Verificar se o número é par ou impar.
    let numero = Number(prompt("Digite um número: "))
    if(numero %2 !== 0){
        alert("É ímpar")
    }else{
        alert("É par")
    }
}

function dava(){
    alert("easter egg! 😱")
}