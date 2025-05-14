// Uma máquina mágica de sucos aceita o nome da fruta e prepara o suco
// correspondente. Se não reconhecer a fruta, diz que está fora do cardápio.
let fruta = prompt("Digite a sua fruta:")

switch(fruta){
    case "laranja":
    console.log("Prepando suco de laranja..")
    break
    case "uva":
    console.log("Preparando suco de uva..")
    break
    case "morango":
    console.log("Preparando suco de morango..")
    break
    default: 
    console.log("Essa fruta não está disponível.")
}