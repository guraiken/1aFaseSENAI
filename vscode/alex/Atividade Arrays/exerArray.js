const numeros = [5, 12, 8, 130, 44, 7, 3, 19, 22];
const nomes = ["Ana", "Carlos", "Beatriz", "Daniel", "Eduarda", "Bruno"];
const produtos = [
 { nome: "Camiseta", preco: 29.9, categoria: "Roupas" },
 { nome: "Notebook", preco: 2500, categoria: "Eletrônicos" },
 { nome: "Mouse", preco: 59.9, categoria: "Eletrônicos" },
 { nome: "Meias", preco: 9.9, categoria: "Roupas" },
 { nome: "Teclado", preco: 120, categoria: "Eletrônicos" }
];

//filtra numeros maiores que 10
function exer1(){
    let numerosMaiorqueDez = numeros.filter(numero=> numero > 10)
    console.log(numerosMaiorqueDez)
}

//dobra os numeros
function exer2(){
    let numerosDobro = numeros.map(numero => numero * 2)
    console.log(numerosDobro)
}

//soma todos os numeros do array
function exer3(){
    let total = numeros.reduce((numero, index )=> numero + index, 0)
    console.log(total)
}

//pega o maior numero do array
function exer4(){
    let maiornumero = Math.max(...numeros)
    console.log(maiornumero)
}

//pega o menor numero do array
function exer5(){
    let menornumero = Math.min(...numeros)
    console.log(menornumero)
}

//ordena de forma crescente, pra fazer o contrario era só fazer b-a
function exer6(){
    let numerosCrescentes = numeros.sort((a,b)=> a-b)
    console.log(numerosCrescentes)
}

// array só com os numeros ímpar
function exer7(){
    let numerosImpares = numeros.filter(numero => numero % 2 !== 0)
    console.log(numerosImpares)
}

//retorna falso se todos os numeros não forem maior que 3
function exer8(){
    let numeroMaiores3 = numeros.every(numero => numero > 3)
    console.log(numeroMaiores3)
}

//retorna true se tiver 1 valor que atenda a condição
function exer9(){
    let numeromaior100 = numeros.some(numero => numero > 100)
    console.log(numeromaior100)
}

function exer10(){
    let mediadosnumeros = numeros.reduce(numero => numero + index, 0)
    console.log(mediadosnumeros)
}