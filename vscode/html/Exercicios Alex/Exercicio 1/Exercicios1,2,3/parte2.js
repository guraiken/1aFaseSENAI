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
    if(senha)alert("Usuário logado")
    else alert("Usuario bloqueado")
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