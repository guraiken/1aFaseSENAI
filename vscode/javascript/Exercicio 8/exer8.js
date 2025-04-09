// Você é um astronauta tentando pousar no Planeta JavaScript. A nave só pousa se
// o combustível for maior que 50 e o clima for "bom
let combustivel = prompt ("Combustivel restante: ")
let clima = prompt ("O clima está bom?")

if(combustivel > 50 && clima == ("sim")){
    console.log("Pouso autorizado!")
}else{
    console.log("Abortar missão!")  
}