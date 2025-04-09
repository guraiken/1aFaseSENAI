// Use operadores de comparação ( == e === ) para responder:
// "Eles dizem a mesma coisa, mas de formas diferentes." ou
// "Eles são exatamente iguais." ou
// "Eles são diferentes."

let suspeito1 = prompt("Digite alguma coisa:")
let suspeito2 = 42

if(suspeito1 === suspeito2){
    console.log("Eles são exatamente iguais.")
}else{
    if(suspeito1 == suspeito2){
        console.log("Eles dizem a mesma coisa, mas de forma diferente.")
    }else{
        console.log("Eles são diferentes.")
    }
}