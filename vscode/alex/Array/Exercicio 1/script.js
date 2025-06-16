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