numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

function exerInvert(){
    // Inverte o indice do array pelo tamanho dele (.reverse() funciona desse jeito)
    let numerosinvertidos = numeros.map((elemento, index) =>{
        let tamanhoarray = numeros.length - 1
        return numeros[tamanhoarray - index]
    })
    
    // chaves no map precisa de return pra voltar, ou usar element
    console.log(numerosinvertidos)

}

// exer 1
function exer1(){
    let nomes = ["Juberto", "Junior", "Paulo", "Ana", "Kayky"]
    console.log(nomes)

    let nomesFiltrados = nomes.filter(nomes => nomes.length <= 4)
    console.log(nomesFiltrados)
}

// exer 3
function exer2() {
    let numeros = [2, 4 ,6 ,10 , 12, 15, 20, 30, 40, 50]

    let numeroDobro = numeros.map((elemento)=> {
        let mult = elemento * 2
        return mult
    })
    console.log(numeroDobro)
}

// exer 5
function exer3() {
    let numeros = [23, 3, 5 , 6, 55, 90, 45, 40, 30, 12 ,10, 20]

    let numerosPares = numeros.filter(numeros => numeros % 2 === 0)

    console.log(numerosPares)
}

// 3 pontinhos serve pra colocar somente o conteudo ao 
// inves do array com colchetes
// exer 15
function exer5() { 
    let numeros = [23, 3, 5 , 6, 55, 90, 45, 40, 30, 12 ,10, 20]
    let maiorNumero = Math.max(...numeros)
    console.log(maiorNumero)
}
// menor numero
// exer 16
function exer6() { 
    let numeros = [23, 3, 5 , 6, 55, 90, 45, 40, 30, 12 ,10, 20]
    let menorNumero = Math.min(...numeros)
    console.log(menorNumero)
}

// exer17
function exer7(){
    let array1 = ["teste", "sabonete"]
    let array2 = ["shampoo", "teste2"]
    let arrayJuntao = [...array1, ...array2]

    console.log(arrayJuntao)
}

// exer19
function exer8(){
    let palavras = ["casa", "banana", "abacate"];
    palavras.sort();

    console.log(palavras)
    
}

// exer20

function exer9(){
    let numeros = [10, 20, 30, 40, 90 , 50, 60]
    numeros.sort((a,b)=> a-b)
    console.log(numeros)
}

// remover valores duplicados
// exer 21 
function exer10(){ 
    let valores = ['Alex', 'Alex', 'João', 'João', 'Claudia', 'Maria']
    let removerDuplicados = new Set([...valores])
    let novoArray = [...removerDuplicados]
    console.log(novoArray) 

    // jeito dificil
    // let arraySemDuplicados = []
    // for(let i=0; i< valores.length; i++){
    //     if(!arraySemDuplicados.includes(valores[i])){
    //         arraySemDuplicados.push(valores[i])
    //     }
    // }
    // console.log(arraySemDuplicados)
}

// exer22
function exer11() {
    let valores = ['Alex', 'Alex', 'João', 'João', 'Claudia', 'Maria']
    
    let quantasVezesApareceAlex = valores.filter(valores=> valores === 'Alex').length
    console.log("Alex aparece" + quantasVezesApareceAlex + " vezes")
}

// transforme todos os itens do array em uma unica string, exer23
function exer12() {
    let usuarios = ['Alex', 'João', 'Claudia', 'Maria', "Carlos"]
    console.log(usuarios.join(", "))
}

// 24. substitua todas as ocorrencias de banana por maçã em um array 
function exer13(){
    let frutas = ["Abacaxi", "Laranja", "Kiwi", "Banana", "Banana", "Maçã"]
    let frustasNovo = frutas.map(frutas => frutas === "Banana" ? "Maçã" : frutas)
    console.log(frustasNovo)
}

// 25. Encontre o índice de um valor específico com .indexOf().
function exer14(){
    let frutas = ["Abacaxi", "Laranja", "Kiwi", "Pitaya", "Banana", "Maçã"]
    console.log(frutas.indexOf("Kiwi"))
}

// 26. Crie um novo array contendo apenas as strings de um array com tipos mistos.
function exer15() {
    let mistos = ["Abacaxi", "Laranja", 34, 222]
    let strings = mistos.filter(valor=> typeof valor === "string")
    let number = mistos.filter(valor=> typeof valor === "number")
    console.log(strings)
    console.log(number)
}

// 27. Coloque a primeira letra de cada palavra em maiúscula
function exer16() {
    let palavras = ["teste", "seila", "qlqr coisa", "porcaria"]
    let palavrasMaiusculas = palavras.map((palavra) => {
        let [primeira, ...restante] = palavra
        let novaletra = primeira.toUpperCase()
        return novaletra + restante.join('')
    })
    console.log(palavrasMaiusculas)
}

// 28. Verifique se todos os elementos são números com .every().
// find nao percorre todos os elementos por isso nao é recomendavel 
function exer17() {
    let elementos = [4, 6, 8, 10, 12, 14, 16]
    let saonumeros = elementos.every(elemento => typeof elemento === "number")
    console.log(saonumeros)
}

// Verifique se ao menos um número é maior que 100 usando .some().
function exer18() {
    let numeros = [10, 20, 30, 40 , 55, 120, 44]
    let teste = numeros.some(numeros => numeros > 100)
    console.log(teste)
}

// 30. "Achatamento": transforme um array com subarrays em um único array plano
// (um nível só).
function exer19() {
    let arraydearray = [321,34,51,55, [412, 312, 22, 11, ["sabonetasso", "dadaboae"]]]
    let arrays = arraydearray.flat(2)
    console.log(arraydearray, arrays)

}

// 31. A partir de uma lista de idades, retorne apenas os adultos (idade ≥ 18).
function exer20() {
    let idades = [18, 19, 15, 14, 16, 20, 25, 29]
    let idadesMaior = idades.filter(idades => idades >= 18)
    console.log(idadesMaior)
}

// 32. Crie uma função que recebe um array de números e retorna a média.

// 34. Rotacione os elementos de um array uma posição para a direita.
function exer21() {
   let notas = [5,6,7,8]
    console.log(calcularMedia(notas))
    console.log(rotacionar(notas))
}
function calcularMedia(array){
    let soma = array.reduce((acumulador, atual)=> acumulador+= atual, 0) /*começa com 0 e vai acumulando até somar o total*/
    return soma/array.length /*soma divida pela quantidade de notas*/
} 


function rotacionar(array){
    array.unshift(array.pop())
    return array;
}

// 37. Conte as vogais em cada string de um array.
function exer22() {
    let palavras = ["vagabundo", "condominio", "miseria"]
    console.log(palavras.map(palavras=> {
        return {
            palavra: palavras,
            vogais: contarVogais(palavras)
        }
    }))
}

function contarVogais(palavra) {
    return (palavra.match(/[aeiou]/gi) || []).length
}

