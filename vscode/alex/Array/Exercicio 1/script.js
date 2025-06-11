function exer1(){

}

numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// Inverte o indice do array pelo tamanho dele
let numerosinvertidos = numeros.map((elemento, index) =>{
    let tamanhoarray = numeros.length - 1
    return numeros[tamanhoarray - index]
})

console.log(numerosinvertidos)