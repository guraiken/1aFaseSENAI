function nota(){
    let nota1 = Number(document.getElementById("nota1").value)
    let peso1 = Number(document.getElementById("peso1").value)

    let nota2 = Number(document.getElementById("nota2").value)
    let peso2 = Number(document.getElementById("peso2").value)

    let nota3 = Number(document.getElementById("nota3").value)
    let peso3 = Number(document.getElementById("peso3").value)

    let nota4 = Number(document.getElementById("nota4").value)
    let peso4 = Number(document.getElementById("peso4").value)

    let tagresultado = document.getElementById("resultado") 
    somaPesos = peso1 + peso2 + peso3 + peso4
    let resultado = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3) + (nota4 * peso4)) / somaPesos
    if(resultado > 10 || resultado < 0){
        tagresultado.innerText = "Digite uma nota e peso compativeis com o máximo de 10."
    }else{
        tagresultado.innerText = `A média total das quatro notas é: ${resultado}`
    }

}