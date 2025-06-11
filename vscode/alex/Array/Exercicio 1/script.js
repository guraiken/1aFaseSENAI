function exer1(){

}

numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// Inverte o indice do array pelo tamanho dele (.reverse() funciona desse jeito)
let numerosinvertidos = numeros.map((elemento, index) =>{
    let tamanhoarray = numeros.length - 1
    return numeros[tamanhoarray - index]
})

// chaves no map precisa de return pra voltar, ou usar element

console.log(numerosinvertidos)