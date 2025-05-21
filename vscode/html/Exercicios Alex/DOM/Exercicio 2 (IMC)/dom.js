function imc(){
    let nome = document.getElementById("nome").value
    let idade = document.getElementById("idade").value
    let sexo = document.getElementById("sexo").value
    let peso = Number(document.getElementById("peso").value)
    let altura = Number(document.getElementById("altura").value)
    
    let resultado = document.getElementById("resultado")
    let imc = peso / altura** 2

    if(imc >= 18.6 && imc < 25){
        resultado.innerText = `Olá, seja bem vindo ${nome}, ${idade} anos. \nO resultado do seu IMC é: ${imc} \n Você está saudável!`  
    }else if(imc < 18.6){
        resultado.innerText = `Olá, seja bem vindo ${nome}, ${idade} anos. \nO resultado do seu IMC é: ${imc} \n Você está com magreza.`
    }else if(imc >= 25){
        resultado.innerText = `Olá, seja bem vindo ${nome}, ${idade} anos. \nO resultado do seu IMC é: ${imc} \n Você está com sobrepeso`
    }
}