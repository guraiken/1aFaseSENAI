function exercicio1(){ // Soma
    let n1 = Number(prompt("Digite um número:"))
    let n2 = Number(prompt("Digite outro número"))
    let soma = n1 + n2
    alert("A soma dos dois números é: " + soma)
}
function exercicio2(){ // Media
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
        alert("O número é ímpar")
    }else{
        alert("O número é par")
    }
}
function exercicio5(){ // Média de 3 notas
    let nota1 = Number(prompt("Digite sua primeira nota (0 a 10): "))
    let nota2 = Number(prompt("Digite sua segunda nota (0 a 10):"))
    let nota3 = Number(prompt("Digite sua terceira nota (0 a 10):"))
    let media = (nota1 + nota2 + nota3) / 3

    if(media <0 || media > 10){
        alert("Por favor digite um número válido")
    }else{
        alert(`A média das suas notas foi: ${media}`)
    }
}
function exercicio6(){ // Calculo de IMC
    let peso = Number(prompt("Digite seu peso: "))
    let altura = Number(prompt("Digite sua altura: "))
    let imc = peso / (altura*altura)

    if(imc < 18.5){
        alert(`Seu IMC é igual a: ${imc} \n Você está abaixo do peso.`)
    }else if(imc >= 18.5 && imc <= 24.9){
        alert(`Seu IMC é igual a: ${imc} \n Seu peso está normal.`)
    }else if (imc >= 25 && imc <= 29.9){
        alert(`Seu IMC é igual a: ${imc} \n Você está com sobrepeso.`)
    }else if (imc >= 30){
        alert(`Seu IMC é igual a: ${imc} \n Você está com obesidade.`)
    }
}
function exercicio7(){ // Ano bissexto
    let ano = Number(prompt("Digite o ano:"))
    
    if (ano % 4 == 0 || ano % 100 == 0 && ano % 400 != 0){
        alert(`${ano} é bissexto`)
    }else{
        alert(`${ano} não é bissexto`)
    }
}
function exercicio1lista2(){
    let frase
}




































function dava(){ // (Não mexer)
    alert("easter egg! 😱")
}