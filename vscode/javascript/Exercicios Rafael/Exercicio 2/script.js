// quantos brinquedos levou / cada brinquedo 1 moeda / limite é 3 moedas

function iniciar(){
    let brinquedo = Number(prompt("Quantos brinquedos pegou: "))
    let moedas = Number
    moedas = brinquedo

    if(brinquedo >= 3){
        moedas = 3
        alert("Você pegou: " + brinquedo + " brinquedo(s)" + " e " + moedas + " moeda(s).")
    }else{
        if(brinquedo < 3){
            alert("Você pegou: " + brinquedo +" brinquedo(s)"+ " e " + moedas + " moeda(s).")
        }
    }
}