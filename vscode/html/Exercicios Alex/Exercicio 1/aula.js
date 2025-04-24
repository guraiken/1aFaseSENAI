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
function exercicio1Lista2(min, max){ //Decodificador de mensagem

}
function exercicio2Lista2(){ //Gerador de nome de super heroi
    let numeroRandom = Math.floor (Math.random() * (12 - 1) + 1);
    let nomeUsuario = prompt("Digite seu nome: ")
    switch(numeroRandom){
        case 1: alert(`${nomeUsuario} Super Bolas Sônicas`)
        break
        case 2: alert(`Capitão ${nomeUsuario} Saqueador de Corações`)
        break
        case 3: alert(`Mestre ${nomeUsuario} Artista Marcial de Rua (Breakdance)`)
        break
        case 4: alert(`${nomeUsuario} Volatilizador de Docerias`)
        break
        case 5: alert(`${nomeUsuario} Mestre dos Magos (DavyJones)`)
        break
        case 6: alert(`Seu amigo ${nomeUsuario} Super Depressão`)
        break
        case 7: alert(`${nomeUsuario} Pináculo da Pobreza`)
        break
        case 8: alert(`Mega ${nomeUsuario} Ápice da Musculatura desumana`)
        break
        case 9: alert(`Tralalero ${nomeUsuario} Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Tung Sahur`)
        break
        case 10: alert(`${nomeUsuario} o Megalomâniaco dos Roguelikes`)
        break
        case 11: alert(`${nomeUsuario} Fedor INsuportável`)
        break
    }
}
function exercicio3Lista2(){
    let numero = geradorRandom(1, 9)
    alert(numero)
}

































function geradorRandom(min, max){
    let numeroRandom = Math.floor(Math.random() * (max - min) + min)
   return numeroRandom
}
function dava(){ // (Não mexer)
    alert("easter egg! 😱")
}