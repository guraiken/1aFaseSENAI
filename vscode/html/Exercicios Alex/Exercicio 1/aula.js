let contador = 0
function botao(){ // soma de cliques do botão
    contador++
}
function botao1(){
    alert(`Você clicou ${contador} vezes!`)
}
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
function exercicio1Lista2(){ //Gerador de nome de super heroi
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
function exercicio2Lista2(){ // Horóscopo
    let signo = prompt("Digite seu signo:")
    let numero = geradorRandom(1, 9)
    switch(numero){
        case 1: alert(`Hoje é um ótimo dia para buscar desafios, ${signo}`)
        break
        case 2: alert(`${signo}, laços de confiança se fortalecem, trazendo calma e segurança diante dos desafios.`)
        break
        case 3: alert(`${signo}, A vida é uma corrida, e você está sempre na frente, com o coração pulsando de adrenalina!`)
        break
        case 4: alert(`${signo}, A estabilidade é a sua base, mas não tenha medo de explorar novos caminhos quando se sentir pronto. `)
        break 
        case 5: alert(`${signo}, A verdadeira força vem da sua capacidade de se adaptar, abraçar a mudança e proteger aqueles que ama.`)
        break
        case 6: alert(`${signo}, Você nasceu para brilhar e conquistar os corações ao seu redor com seu charme irresistível.`)
        break
        case 7: alert(`${signo}, A perfeição é sua busca, mas lembre-se de que a beleza está também na imperfeição.`)
        break
        case 8: alert(`${signo}, Equilibrar as escolhas da vida é um dom, mas não tenha medo de seguir seus próprios instintos.`)
        break
    }                                                                                                                                                                   
}

function exercicio3Lista2(){ // Jogo de Par ou Ímpar
    let numeroComputador = geradorRandom(0, 11)
    let numeroUsuario =  Number(prompt("Digite um número (O número escolhido será par ou impar): "))
    let somaBoth = numeroComputador + numeroUsuario

    if(numeroUsuario % 2 == 0 && somaBoth % 2 == 0){
        alert(`O resultado deu ${somaBoth} e é par!\n O usuário ganhou!`)
    }else if(numeroUsuario % 2 != 0 && somaBoth % 2 != 0){
        alert(`O resultado deu ${somaBoth} e é ímpar!\n O usuário ganhou!`)
    }else if(numeroUsuario % 2 == 0 && somaBoth %2 != 0){
        alert(`O resultado deu ${somaBoth} e é ímpar!\n O usuário perdeu :(`)
    }else if(numeroUsuario % 2 != 0 && somaBoth %2 == 0){
        alert(`O resultado deu ${somaBoth} e é par!\n O usuário perdeu :(`)
    }
}

function exercicio4Lista2(){ //Jogo do número secreto 
    let numeroSecreto = geradorRandom(1, 101)
    let numeroUser = Number(prompt("Digite um número de 1 a 100: "))    
    if(numeroUser == numeroSecreto){
        alert(`Você ganhou!\n O número secreto era: ${numeroSecreto}`)
    }else if(numeroUser != numeroSecreto){
        alert(`Você perdeu..\n O número secreto era: ${numeroSecreto}`)
    }else{
        alert("O número que você digitou é inválido.")
    } 
}

function exercicio5Lista2(){ //gerador de senhas aleatorias
    let quantidadeSenha = Number(prompt("Informe a quantidade de caractéres da senha: (Máx 50)"))
    let senha = ''
    while(quantidadeSenha > 0 && quantidadeSenha <= 50){
        senha+= caracterAleatorio()
        quantidadeSenha--
    }
    if(quantidadeSenha <= 50){
        alert("Sua senha é: " + senha)
        }else{
            alert(`O número ${quantidadeSenha} está fora dos limites do gerador.`)
        }
}
function exercicio6Lista2(){ // Jogo da Forca
    let tentativas = 3
    let pergunta = prompt("Digite uma letra")
}
function exercicio7Lista2(){ // Quiz de Perguntas
    let pergunta1 = "Quanto que é 20 * 10? \n Opções: \n 1 - 10 \n 2 - 20 \n 3 - 50 \n 4 - 200"
    resposta1 = 4
    let pergunta2 = "Quantos lados tem um losango? \n Opções: \n 1 - 5 \n 2 - 4 \n 3 - 2 \n 4 - 1"
    resposta2 = 2
    let pergunta3 = "Em qual país do mundo fica Hong-Kong? \n Opções: \n 1 - China \n 2 - África \n 3 - Japão \n 4 - Coréia"
    resposta3 = 1
    let pergunta4 = "Quem descobriu o Brasil? \n Opções: \n 1 - Mao Tsé Tung \n 2 - Dom. Pedro I \n 3 - Pedro Álvares Cabral \n 4 - Davi Brito"
    resposta4 = 4   
    tentativas = 2
    let nota = 0
    acertou1 = false
    acertou2 = false
    acertou3 = false
    acertou4 = false
    
    while(nota != 10 && tentativas != 0){
        nota = 0
        if(acertou1 === false){
           respostaPergunta1 = Number(prompt("Pergunta 1: " + pergunta1 + "\n Qual a alternativa correta?"))
        }
        if(respostaPergunta1 == resposta1){
            nota+= 2.5
            acertou1 = true
        }if(acertou1 === true){
            alert("Você acertou a número 1! \n 2 pontos")
        }else{
            alert("Você errou.")
        }if(acertou2 === false){
            respostaPergunta2 = Number(prompt("Pergunta 2: " + pergunta2 + "\n Qual a alternativa correta?"))
        }if(respostaPergunta2 == resposta2){
            nota+= 2.5
            acertou2 = true
        }if(acertou2 === true){
            alert("Você acertou a número 2! \n 2 pontos")
        }else{
            alert("Você errou.")
        }if(acertou3 === false){
            respostaPergunta3 = Number(prompt("Pergunta 3: " + pergunta3 + "\n Qual a alternativa correta?"))
        }if(respostaPergunta3 == resposta3){
            nota+= 2.5
            acertou3 = true
        }if(acertou3 === true){
            alert("Você acertou a número 3! \n 2 pontos")
        }else{
            alert("Você errou.")
        }if(acertou4 === false){
            respostaPergunta4 = Number(prompt("Pergunta 4: " + pergunta4 + "\n Qual a alternativa correta?"))
        }if(respostaPergunta4 == resposta4){
            nota+= 2.5
            acertou4 = true
        }if(acertou4 === true){
            alert("Você acertou a número 4! \n 2 pontos")
        }else{
            alert("Você errou.")
        }
        if(tentativas != 0 || nota != 10){
        tentativas--
        alert(`Você ainda tem ${tentativas} tentativas`)
        }
        if(tentativas == 0 || nota == 10){  
        alert("Seu quizz acabou, sua nota é: " + nota)
        }
    }  
}

function exercicio8Lista2(){

}

function exercicio9Lista2(){ //Decisometro (sim, nao, talvez)
    let decisometro = geradorRandom (1, 10)
    let pergunta = prompt("Você quer se decidir? (Sim/Não)")
    let duvida

    if(pergunta.length == 3 && pergunta.charAt(0) == "s" && pergunta.charAt(2) == "m" && pergunta.charAt(1) == "i" || pergunta.charAt(1) == "I" || pergunta.charAt(0) == "S" || pergunta.charAt(2) == "M"  ){
        let duvida = prompt("Digite sua dúvida: ")
        switch(decisometro){    
            case 1: 
            alert("Sim, você deveria.")
            break
            case 2:
            alert("Então a resposta é não.")
            break
            case 3:
            alert("Talvez..")
            break
            case 4:
            alert("Sim")
            break
            case 5: 
            alert("Na verdade, não")
            break
            case 6: 
            alert("Eu acho que sim")
            break
            case 7:
            alert("Isso.. hmmm.. talvez")
            break
            case 8: 
            alert("Definitivamente não")
            break
            case 9: 
            alert("Acho que você não deveria fazer nada")
            break
        }
    }else if(pergunta.length != 3){
        alert("Ok.")
    }else{
    }
}

function exercicio10Lista2(){

}
































function caracterAleatorio(){
    const caracterRandom = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%¨&*'
    const numeroAleatorio = Math.floor(Math.random() * caracterRandom.length)
    
    return caracterRandom.charAt(numeroAleatorio)
}
function geradorRandom(min, max){
    let numeroRandom = Math.floor(Math.random() * (max - min) + min)
   return numeroRandom
}
function dava(){ // (Não mexer)
    alert("easter egg! 😱")
}