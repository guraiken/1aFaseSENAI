// Simular uma barra carregando
function exercicio1L2(){
    let barra = ``
    for(let i = 1; i <= 10; i++){ 
        alert("Em progresso.. " + barra)
        barra+= "█"
    }
} 
// TABELA VERDADE E(&&)
// false && false => false
// false && true => false
// true && false => false
// true && true => true

// TABELA VERDADE OU(||)
// false || false => false
// false || true => true
// true || false => true
// true || true => true

//repete enquanto nao tiver idade minima
//nao aceitar os termos

function exercicio2L2(){ 
let idademinima = 0
let aceitouTermo = false

while(aceitouTermo == false || idademinima < 18){
    idademinima = Number(prompt("Qual sua idade?"))
    let resposta = prompt("Aceita o termo? (Sim/Não)")
    if(resposta === "Sim"){aceitouTermo = true
    }else{
        aceitouTermo = false
    }
}
alert("Você está inscrito!")
}
// Exibe numeros multiplos de 2 e 3 ou que sejam 25.

function exercicio3L2(){
    let resultado = ''
    for(let cont = 0; cont <= 100; cont++){
        if(cont % 2 == 0 || cont % 3 == 0 || cont == 25)
        {resultado += cont + ", "   

        }        
    }
    alert(resultado)
}

function exercicio4L2(){
    let tentativa = 1
    let senha = 'gustavo123'
    let senhadigitada = ''
    // while(senhadigitada !== senha && tentativa <= 3){
    //     senhadigitada = prompt("Digite sua senha: ")
    //     ++tentativa
    //     if(senhadigitada !== senha){
    //         alert("Senha incorreta!")
    //     }
    // }
    
    // login com limite de 3 tentativas
    for(let tentativas = 1; tentativas <= 3 && senhadigitada !== senha; tentativas ++){
        senhadigitada = prompt("Digite sua senha: ")
    }
    if(senhadigitada !== senha){
        alert("Conta bloqueada")
    }else{
        alert("Logado!")
    }
}

//login até nome "admin" e senha "1234" corretos. 3 tentativas
function exercicio5L2(){
    let usuario = "admin"
    let senha = "1234"
    usuariodigitado = ''
    usuariosenha = ''
    let tentativas = 1

    while((usuario !== usuariodigitado || senha !== senhadigitada) && tentativas <= 3){
        usuariodigitado = prompt("Digite o usuario:")
        senhadigitada = prompt("Digite a senha:")
        tentativas++
    }
    if(senhadigitada === senha)alert("Você está logado")
    else alert("Usuario bloqueado")
}
