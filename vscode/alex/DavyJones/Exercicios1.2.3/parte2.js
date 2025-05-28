// Enquanto a senha digitada não for “abc123” e o número de tentativas for
// menor que 3, peça a senha novamente.
function exer11(){
    let senha = 0 
    let tentativas = 3

    while(tentativas >= 1 && !senha){
        senha = prompt("Digite a senha:") == "abc1234" ? true : false
        tentativas--
        senha == false ? alert("Você tem mais " + tentativas + " tentativas.") : true
    }
    senha == true ? alert("Usuário logado.") : alert("Usuário bloqueado.")
}

//termos e idade
function exer12(){
    let idade = 0
    let aceitoutermos = false

    while(idade < 18 || aceitoutermos === false){
        idade = Number(prompt("Digite sua idade:"))
        aceitoutermos = prompt("Você aceita os termos? (sim/não)") == "sim" ? true : false
    }
    alert("Você tem permissão.")
}

//solicite 2 números até que ambos sejam pares

function exer13(){
    let num1 = 1
    let num2 = 1

    while(num1 % 2 != 0 || num2 % 2 != 0){
        num1 = Number(prompt("Digite um número:"))
        num2 = Number(prompt("Digite outro número:"))
    }
}

//só funciona se a letra for a ou b
function exer14(){ 
    let letra = ''

    while(letra != "a" && letra != "b"){
        letra = prompt("Digite uma letra: ")
    }
}

// numero que seja entre 10 e 20 ou 50
function exer15(){
    let num = 1

    while(num < 10 || num > 20 && num != 50){
        num = Number(prompt("Digite um número"))
    }
    alert("Número correto")
}

// login até usuario e senha corretos
function exer16(){
    let usuario = false
    let senha = false

    while(usuario === false || senha == false){
        usuario = prompt("Digite um usuário:") == "admin" ? true : false 
        senha = prompt("Digite uma senha: ") == "1234" ? true : false
        senha ==! "1234" ? alert("Senha ou usuário incorreto(s)") : true
    }
    alert("Usuário logado.")
}

//continuar até resposta ser não
function exer17(){
    let resposta = ''

    while(resposta != "não"){
        resposta = prompt("Deseja continuar? (sim/não)")
    }
    alert("OK!")
}

//dois valores até que um seja multiplo de 3 e o outro maior que 10
function exer18(){
    let condition = false

    while(condition == false){
        let num1 = Number(prompt("Digite um número:"))
        let num2 = Number(prompt("Digite outro número:"))
        if(num1 % 3 == 0 && num2 >= 10){
            condition = true
        }else if(num1 >= 10 && num2 % 3 ==0){
            condition = true
        }
    }
    alert("O número está dentro dos parâmetros")
}

//login
function exer19(){
    let admin = false
    let senha = false

    while(admin == false || senha == false){
    admin = prompt("Digite seu usuário: ") == 'admin' ? true:false
    senha = prompt("Digite sua senha: ") == '1234' ?true:false
    }
    alert("Usuário logado!")
}

//enquanto n preencher idade e nome vai continuar rodando
function exer20(){
    let nome = false
    let idade = false

    while(nome == false || idade == false){
        nome = prompt("Digite seu nome: ") >= 'a' ? true:false
        idade = Number(prompt("Digite sua idade:")) >= 1 ?true:false
    }
    alert("Login permitido!")
    
}













// function cnh(){
//     let idade = 0
//     let temcnh = false

//     while(idade < 18 || !temcnh){
//         idade = Number(prompt("Digite sua idade: "))
//         temcnh = prompt("Você tem cnh? (sim/não)") == "sim" ? true : false // operador ternário
//         if(idade >= 18 && temcnh) alert("Você pode dirigir")
//         else alert("Ainda não pode dirigir")
//     }
// }