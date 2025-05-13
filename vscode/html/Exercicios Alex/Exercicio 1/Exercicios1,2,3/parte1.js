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