
//imprima todos os números de 1 a 100 que são pares e múltiplos de 3.
function exer21(){
    let numParMult = ''
    for(let cont = 1; cont <= 100; cont++){
        if(cont % 3 == 0 || cont % 2 == 0){
            numParMult = numParMult + ', ' + cont
        }
    }
    alert(numParMult)
}

//Imprima os números de 1 a 50 que são ímpares ou múltiplos de 7.
function exer22(){
    let numeros = ''
    for(cont = 1; cont <=50; cont++){
        if(cont % 7 == 0 || cont % 1 == 0){
            numeros+= " ," + cont++  
        }
    }
    alert(numeros)
}

//Mostre todos os números entre 1 e 30 que não são divisíveis por 2 e por 3.
function exer23(){
    let total = ''
    for(num = 1; num <=30; num++){
        if(num % 2 != 0 && num % 3 != 0){
            total += ' ,' + num
        }
    }
    alert(total)
}

//De 1 a 100, exiba apenas os que estão entre 10 e 20 ou entre 90 e 100.
function exer24(){
    let total = ''
    for(i= 1; i <= 100; i++){
        if(i >= 10 && i <= 20 || i>= 90 && i<=100){
            total+= ' ,' + i
        }
    }
    alert(total)
}

//Números múltiplos de 4 mas não de 8, até 20
function exer25(){
    let total = ''
    for(i = 0; i <= 20; i++){
        if(i % 4 == 0 && i % 8 != 0){
            total+= ' ,' + i
        }
    }
    alert(`Números múltiplos de 4 mas não de 8: ${total}`)   
}

//Percorra de 0 a 50 e exiba os números onde (número > 30 e número < 40) ou
function exer26(){
    let resultado = ''
    for(i = 0; i <=50; i++){
        if(i >=30 && i <=40 || i % 10 === 0){
            resultado+= " ," + i
        }
    }
    alert(`Resultado dos números de 30 a 40 e multiplos de 10 é: ${resultado}`)
}

// Imprima de 1 a 20 os números pares ou divisíveis por 5.
function exer27(){
    let resultado = ""
    for(i = 1; i <= 20; i++){
        if(i % 2 == 0 || i % 5 == 0){
            resultado+= ' ,' + i
        }
    }
    alert(resultado)
}

//Mostre todos os números entre 0 e 100 que sejam múltiplos de 6 e não multiplos de 9
function exer28(){
    let resultado = ''
    for(i = 0; i <= 100; i++){
        if(i % 6 == 0 && i % 9 != 0){
            resultado+= ' ,' + i
        }
    }
    alert(`Multiplos de 6 mas não de 9: ${resultado}`)
}

//De 1 a 50, imprima apenas os números menores que 10 ou maiores que 40.
function exer29(){
    let resultado = ''
    for(i = 1; i <=50 ;i++){
        if(i <= 10 || i >= 40){
            resultado+= ' ,' + i
        }
    }
    alert(resultado)
}

//Percorra os números de 1 a 30. Para cada número, imprima "Especial" se ele
// for múltiplo de 3 e estiver entre 10 e 25.
function exer30(){
    let result = ''
    let resultEsp = ''
    for(i = 1; i <=30 ;i++){
        if(i >= 10 && i <= 25 && i % 3 == 0){
            resultEsp+= "O número " + i + " é especial,"
        }else if(i>= 10 && i<= 30){
            result+= " ," + i
        }
    }
    alert(result)
    alert(resultEsp)
}
