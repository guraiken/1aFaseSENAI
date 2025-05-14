function exer1(){ // pode dirigir se tiver carteira e mais de 18
    let idadepedida = Number(prompt("Qual sua idade?"))
    let carteira = false
    if(idadepedida < 18){
        alert("Você não possui idade para dirigir.")
    }else if(idadepedida >=18){
    let temcarteira = prompt("Você possui carteira de motorista?")
    }if(carteira == "Sim" || "sim"){
        carteira = true
    }if(idadepedida >=18 && carteira === true){
        alert("Você pode dirigir.")
    }
}

function exer2(){ // par e positivo
    let numerodigitado = Number(prompt("Digite um número:"))

    if(numerodigitado % 2 == 0 && numerodigitado >= 0){
        alert(numerodigitado + " é positivo e par.")
    }else{
        alert("Número digitado não é positivo e par ou não está nos parâmetros.")
    }
}

function exer3(){ // usuario e senha
    let senha = 1234
    let usuario = "admin"
    let usuariopedido = prompt("Digite o usuário:")
    let senhapedida = prompt("Digite a senha:")

    if(usuariopedido == usuario && senhapedida == senha){
        alert("Acesso permitido")
    }else alert("Usuário negado")
}

function exer4(){ // 1 numero positivo e outro negativo
    let numero1 = Number(prompt("Digite um número:"))
    let numero2 = Number(prompt("Digite outro número"))

    if(numero1 >= 0 && numero2 < 0 || numero1 < 0 && numero2 >= 0) alert("Valores válidos")
    else alert("Valores inválidos")
}

function exer5(){ // aprovado se nota maior ou igual a 6 e menor ou igual a 10
    let nota = Number(prompt("Digite sua nota:"))

    if(nota >= 6 && nota <= 10)alert("Aprovado!")
    else alert("Reprovado!")
}

function exer6(){ // invalido se n for de 1 a 100
    let numeropedido = Number(prompt("Digite um número de 1 a 100:"))

    if(numeropedido >= 1 && numeropedido <= 100) alert("Número válido")
    else alert("Número inválido")
}

//Peça a idade e se o usuário é estudante. Exiba "Meia entrada" se for menor de
// 18 ou estudante.
function exer7(){ 
    let idade = prompt("Digite sua idade:")
    let estudante = prompt("Você é estudante?")

    if(idade <18 || estudante == "Sim" || estudante == "sim"){
        alert("Meia entrada")
    }else alert("Entrada normal")
}

//Peça se o usuário aceitou os termos (sim/não) e confirmou o email (sim/não).
// Exiba "Cadastro completo" se ambos forem "sim".
function exer8(){
    let termos = prompt("Aceita os termos? (sim/não)")
    let email = prompt("Confirmou o seu email? (sim/não)")

    if(termos == "sim" && email == "sim"){
        alert("Cadastro completo")
    }else alert("Cadastro incompleto")
}

//Peça a altura e o peso. Exiba "Apto para o esporte" se altura > 1.60m e peso
// entre 50 e 90 kg.
function exer9(){
    let altura = Number(prompt("Digite sua altura"))
    let peso = Number(prompt("Digite seu peso (Kg)"))

    if(altura >= 1.60 && peso >= 50 && peso <= 90){
        alert("Apto para o esporte")
    }else alert("Inapto para o esporte")
}

// Verifique se uma pessoa não é maior de idade ou não aceitou os termos. Se
// for verdade, exiba "Acesso negado"
function exer10(){
    let idade = prompt("Digite sua idade:")
    let termos = prompt("Aceitou os termos? (sim/não)")

    if(idade >= 18 && termos == "sim"){
        alert("Acesso autorizado")
    }else alert("Acesso negado")
}