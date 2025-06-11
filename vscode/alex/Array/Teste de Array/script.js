let nomes = ["João", "Clara", "Joséncio", "Judas", "Josefina", "José Carla", "José Aberto", "José Closide", "José Pinto Goes Ando" ];
nomes.forEach((element, index) =>  {
    console.log(element + (index+1) )
}
);

nomesComSobrenome = nomes.map((nome) => {
    return(nome + " da Silva")

});
console.log(nomes + nomesComSobrenome)

let nomesFiltrados = nomes.filter((nome) => nome.length > 5 )
console.log(nomesFiltrados)
let findNome = nomes.find((nome) => nome.length > 5)
console.log(findNome)

numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

let soma = numeros.reduce((acumulado, valoratual) => acumulado+valoratual, 0)
console.log(soma)

let nomes2 = ["João", "Clara", "Jonas", "Carla", "Maria", "Alessandro", "Carlos", "José"]
let nomesvirgula = nomes2.reduce((acumulado, valoratual) => acumulado + ", " + valoratual)
console.log(nomesvirgula)
