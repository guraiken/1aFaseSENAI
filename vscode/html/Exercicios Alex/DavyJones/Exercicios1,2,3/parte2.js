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