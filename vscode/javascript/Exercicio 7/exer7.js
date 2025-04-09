// Um robô serve café conforme o pedido. Ele só aceita "café", "capuccino" ou
// "expresso". Qualquer outro pedido, ele responde educadamente.
let pedido = prompt("Digite o tipo de café:")

switch(pedido){
case "café":
console.log("Servindo café ☕")
break
case "capuccino": 
console.log("Servindo capuccino..")
break
case "expresso":
console.log("Servindo expresso 🔥")
break
default:
console.log("Desculpe, não temos esse tipo de café😔")
}