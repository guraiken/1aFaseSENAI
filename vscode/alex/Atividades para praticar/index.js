let contador = 0
let contadorSalvo = localStorage.getItem('cont')

if(contadorSalvo){
    contador = Number(contadorSalvo);
    document.getElementById("painelContador").innerText = contador
}

document.getElementById("botaoClick").addEventListener('click', function(){
    contador++
    let mostrarContador = document.getElementById("painelContador")
    mostrarContador.innerText = contador
    localStorage.setItem("cont", contador)
})

let areaTexto = document.getElementById("areaDeTexto")
let textoSalvo = localStorage.getItem("text")
if(textoSalvo){
    areaTexto.value = textoSalvo
}

areaTexto.addEventListener('input', function (){ 
    localStorage.setItem("text", areaTexto.value)
    console.log(textoSalvo)
})
