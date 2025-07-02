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

//Faz a média dos números do array
function exer10(){
    let soma = numeros.reduce((acumulador, atual) => acumulador + atual)
    let mediaArray = soma / numeros.length
    console.log(mediaArray)
}

//Organiza os nomes por ordem alfabética
function exer11(){
    let ordemAlfabetica = nomes.sort()
    console.log(ordemAlfabetica)
}

//filtra os nomes com mais de 5 letras
function exer12(){
    let nomes5Letras = nomes.filter(nome => nome.length > 5)
    console.log(nomes5Letras)
}

//retorna os nomes em minusculo
function exer13(){
    let palavrasMinusculas = nomes.map((nome) => {
        let [...nomes] = nome
        let min = nome.toLowerCase()
        return min
    })
    console.log(palavrasMinusculas)
}

//retorna como true se o nome começar com a letra B
// function exer14(){
//     let comecacomB = nomes.every(nome=> nome.length[1])
//     console.log(comecacomB)
// }

//retorna o indice que o daniel ta
function exer15(){
    let encontrarDaniel = nomes.indexOf("Daniel")
    console.log(encontrarDaniel)
}

//retorna o nome e a quantidade de letras de cada array
function exer16(){
    let quantidadeLetras = nomes.map((nome) => {
        let nomeseletras = nome + " tem " + nome.length + " letras"
        return nomeseletras
    })
    console.log(quantidadeLetras)
}

//Junta os nomes com join, todos fora de um array em uma string
function exer17(){
    let juntarnomes = nomes.join(", ")
    console.log(juntarnomes)
}

//filtra a categoria do objeto dentro do array
function exer18(){
    let eletronicos = produtos.filter(produto => produto.categoria == "Eletrônicos")
    console.log(eletronicos)
}

//Cria um array novo com o nome dos produtos
function exer19(){
    let nomedosprodutos = produtos.map(produto=> produto.nome);
    console.log(nomedosprodutos)
}

//Aplica um desconto de 10% no preço dos itens
function exer20(){
    let desconto10 = produtos.map((produto)=> {
        let desconto = "Desconto de 10%: " + (produto.preco * 0.90)
        return desconto
    })
    console.log(desconto10)
}

//calcula o valor de todos os produtos
function exer21(){  
    let total = produtos.reduce((acumulador, produto)=> acumulador + produto.preco, 0)
    console.log(total)
}

// primeiro converte em 1 array com apenas os preços e depois pega o maior dentre eles
function exer22(){
    let produto = produtos.map(produto => produto.preco)
    let maior = Math.max(...produto.preco)
    console.log(maior)
}

//cria a variavel que contem o array dos preços e ordena do menor numero para o maior número
function exer23(){
    let produtopreco = produtos.map(produto => produto.preco)
    let ordenar = produtopreco.sort((a,b)=> a-b)
    console.log(ordenar)
}

// Não consegui
function exer24(){
    let produtocategoria = produtos.map(produto => produto.categoria)
    let ordenarcategoria = produtocategoria.sort()
    arrayNovo = [...produtos, ({categoria: ordenarcategoria})]
    console.log(arrayNovo)
    console.log("não consegui")
}

function exer25(){
    let categoria = prompt("Digite uma categoria:")
    let resultado = filtrarporcategoria(categoria)
    alert(JSON.stringify(resultado))
}

//função de filtrar por categoria (tive que pesquisar)
function filtrarporcategoria(categoria){
    let filtro = produtos.filter(produto => produto.categoria === categoria);
}

//Cria com o map um novo array, dentro desse map tem um return com um objeto
function exer26(){
   let nomeepreco = produtos.map(produto =>{
    return{
        nome: produto.nome,
        preco: produto.preco
    }
   })
   console.log(nomeepreco)
}

//verifica se custam mais de 5 e retorna true ou false
function exer27(){
    let verificar5reais = produtos.every(produto=> produto.preco > 5)
    console.log(verificar5reais)
}

// Dado o array numeros , crie um array apenas com os quadrados dos números
// pares.
function exer28(){
    let numerosPares = numeros.filter(numero => numero % 2 == 0)
    let quadradodosPares = numerosPares.map(numero => {
        let quadrado = numero * numero
        resultado = "o quadrado de " + numero + " é igual a: " + quadrado
        return resultado
    })
    console.log(quadradodosPares)
}

//primeiro procura o nome pelo map usando o length, procura a maior letra pelo Math.max, depois procura o indice dela, e então o nome daonde está esse indice
function exer29(){
    let filtro = nomes.map(nome => nome.length)

    let maiorLetra = Math.max(...filtro)
    let achemaiorLetra = nomes.findIndex(nome=> nome.length === maiorLetra)
    let nomeDamaiorLetra = nomes[achemaiorLetra]
    console.log(`O nome da maior letra é ${nomeDamaiorLetra} e tem ${maiorLetra} letras.`)
}

const alunos = [
    {nome: "Gustavo", notas: [8,9,10]},
    {nome: "Fodase", notas: [6,7,8]}
]
let medias = alunos.map(aluno=>{
    let media = aluno.notas.reduce((acc, nota)=> acc + nota) / aluno.notas.length
    aluno.notas = media
    return {
        nome: aluno.nome,
        media: aluno.notas
    }
})
console.log(medias)
