let qntdItens = prompt("Digite quantos itens pegou:")
let valorTotal = prompt("Digite o valor total dos itens (R$):")

if(qntdItens > 3 || valorTotal > 100){
    console.log("Desconto aplicado!")
}else{
    console.log("Sem desconto dessa vez!")
}