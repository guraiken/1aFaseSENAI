let temDinheiro = prompt("Tem dinheiro?")
let estaComFome = prompt("Está com fome?")
let hojeEhSexta = prompt("Hoje é sexta-feira?")

if(temDinheiro === "sim" && estaComFome === "sim" || hojeEhSexta === "sim"){
    console.log("Vamos pedir pizza!")
}else{
    console.log("Hoje não é dia de pizza.")
}
