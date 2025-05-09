function exercicio1(){ // par e impar
    let numero = 1
    while(numero <= 20){
        if(numero % 2 == 0){
            alert(`O número ${numero} é par`)
        }else{
            alert(`O número ${numero} é impar`)
        }
        numero++
    }
}

function exercicio2(){ // ola mundo
    let ola = "Olá mundo!"
    let contador = 1 // controla a quantidade de vezes que aparece
    while(contador <= 5){
        alert(ola)
        contador++ //adiciona mais 1 cada vez que sai o alert
    }
}
function exercicio3(){ //contar de 0 a 50 pulando de 5 em 5
    let numero = 0
    while(numero <= 50){
      alert("O número atual é " + numero)
      numero+= 5
    }
}
function exercicio4(){ // contar de 100 a 0 pulando de 10 em 10
    let numero = 100
    while(numero != -10){ //numero vai parar no 0
        alert("O número atual é " + numero)
        numero-= 10
    }
}
function exercicio5(){ //contar de 0 até 30 mostrando apenas o múltiplos de 3 
    let numero = 3
    while(numero <= 30){
        alert("Multiplos de 3: " + numero)
        numero+= 3
    }
}
function exercicio6(){ // contar de 1 até 10 e mostrar o quadrado de cada número
    numero = 1
    while(numero <= 10){
        quadrado = numero * numero
        alert(`O quadrado de ${numero} é: ${quadrado}`)
        numero++
    }
}
function exercicio7(){ // contar de 1 até 10 e mostrar o cubo de cada número
    numero = 1
    while(numero <= 10){
        let cubo = numero** 3
        alert(`O cubo de ${numero} é: ${cubo}`)
        numero++
    }
}
function exercicio8(){ // conte até 100 e mostre somente os divisíveis por 4
    numero = 1
    while(numero <= 100){
        if(numero % 4 === 0){
            alert(`Números divisíveis por 4: ${numero}`)
        }
        numero++
    }
}
function exercicio9(){ // numeros de 1 a 10
    let numero = 1
    while(numero <= 10){
        alert("Número " + numero)
        numero++
    }
}
function exercicio10(){ // contar até 20. Multiplos de 3 devo escrever Fizz
    let numero = 1
    while(numero <= 20){
        if(numero % 3 == 0){
            alert("Fizz")
        }else{
            alert("Número " + numero)
        }
        numero++
    }
}
function exercicio11(){ // Conte até 20 e exiba “Buzz” para múltiplos de 5.
    let numero = 1 
    
    while(numero <= 20){
        if(numero % 5 == 0){
            alert("Buzz")
            numero++
        }else{
            alert("Número:" + numero)
            numero++
        }
    }
}
function exercicio12(){  // some os números de 1 a 10
    let numero = 0
    let contador = 1
    
    while(contador <= 10){
        numero = numero + contador
        alert("A soma de " + contador + " é igual a: " + numero)
        contador++
    }
}
function exercicio13(){ //contar quantos números pares existem de 1 até 50
   let contador = 1
   let somatoriopar = 0
   let usuariopediu = Number(prompt("Qual número você quer ver a quantidade de pares?"))
   let somaimpar = 0

   while(contador <= usuariopediu){
        if(contador % 2 == 0){
            somatoriopar++
        }else if(contador % 2 != 0){
            somaimpar++
        }
        contador++
   }
   alert("A quantidade de números pares é: " + somatoriopar + "\n A quantidade de números impar é: " + somaimpar)
} //mostra os números pares e ímpares também, além de deixar o usuário pedir

function exercicio14(){
    let contador = 1
    let multiplo = 0
    let usuario = Number(prompt("Digite um número:"))
    let usuariomult = Number(prompt("Digite qual múltiplo você quer saber:"))

    while(contador <= usuario){
        if(contador % usuariomult == 0){
            multiplo++
        }
        contador++
    }
    if(multiplo == 1){
        alert(`O número ${usuario} tem ${multiplo} número múltiplo de ${usuariomult}.`)
    }else if(multiplo == 0){
        alert(`Não tem números múltiplos de ${usuariomult}}.`)
    }else if(multiplo > 1){
        alert(`O número ${usuario} tem ${multiplo} números múltiplos de ${usuariomult}.`) 
    }else{
        alert("Digite um número válido.")
    } //Deixa o usuário pedir quantos números quer e os múltiplos que quer
}

function exercicio15(){
    numero = 0
    contador = 1

    while(contador <= 30){ //contar os números de 1 até 30 pulando multiplos de 4
        if(contador % 4 == 0){
            alert("Número: " + contador)
            numero++ //vai contar os números e ir adicionando
        }
        contador++
    }
}

function exercicio16(){
    let soma = 0
    let contador = 1
    let deuruim = false

    while(contador <= 100 && deuruim === false){
        soma = soma + contador
        ++contador
        if(soma >= 400){
            alert("O número ultrapassou 400.")
            deuruim = true
        }else{
            alert("Número " + soma)
        }
    }    
}
function exercicio17(){ // Simule o funcionamento de um semáforo (verde → amarelo → vermelho)
    let tempo
    let vezes = 3

    while(vezes > 0){
        tempo = 5
        while(tempo > 0){
            alert("Semáfaro Verde - " + tempo)
            tempo--
        }
        tempo = 5
        while(tempo > 0){
            alert("Semáfaro Amarelo - " + tempo)
            tempo--
        }
        tempo = 5
        while(tempo > 0){
            alert("Semáfaro Vermelho - " + tempo)
            tempo--
        }
        vezes--
    }
}




// let senha = "Alex123"
// let acertou = false
// tentativas = 1
// while(tentativas <= 3 && acertou == false){
//     let senhatentativa = prompt("Digite a senha:")
//     if(senha === senhatentativa){
//         alert("Senha correta, usuário logado")
//         tentativas = 4
//         acertou = true
//     }else if (tentativas != 0 && acertou == false){
//         alert("Senha incorreta!")
        
//     }if(tentativas >= 0 && acertou == false){
//         let tentativassobrando = 3 - tentativas
//         let numeroTentativas = 3
//         alert("Você tem mais: " + tentativassobrando + " tentativas.")
//         tentativas++
//     }
// }
// if(acertou == false){ 
// alert("Conta bloqueada")
// }else{
// alert ("Você entrou no sistema")}

// function exerciciopair(){
//     let numerodigitado = Number(prompt("Digite um número"))
//     let digito = 0
//     let contador = 1 
    
//     while(contador <= String(numerodigitado).length){
//         digito++
//         contador++
//     }
//     alert("Digitos: " + digito)
// }

// function simuladorPar(){
//     let contador = 1
//     let somatorio = 0 
    
//     while(contador <= 20){
//         if(contador % 2 == 0){
//             somatorio = somatorio + contador
//             alert("Número: " + contador + " é par e o somatório é " + somatorio)
//         }
//         contador++
//     }
// }

// function fatorial(){
//     numeroDigitado = Number(prompt("Digite o número para fatorar:"))
//     let contador = 1
//     let fatorial = numeroDigitado

//     while(contador < numeroDigitado){
//         fatorial = fatorial * (numeroDigitado - contador)
//         contador++
//     }

//     alert("O fatorial de " + numeroDigitado + " é: " + fatorial)       
// }

// function guessNumberAleatorio(){
//     let numerousuario = 0
//     let numerosecreto = Math.floor(Math.random()* 100)

//     while(numerosecreto !== numerousuario){
//         numerousuario = Number(prompt("Digite o número que você acha que é:"))
//         if(numerousuario === numerosecreto){
//             alert("Parabéns, você acertou!")
//         }else if(numerousuario < numerosecreto){
//             alert("O número que você digitou é menor")
//         }else if(numerousuario > numerosecreto){
//             alert("O número que você digitou é maior!")
//         }else{
//             alert("Por favor, digite um número válido.")
//         }
//     }
// }