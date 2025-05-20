let contador = 0
function clicker(){ // soma de cliques do botão
    contador++
    let mostrarContador = document.getElementById("contadordeClick")
    mostrarContador.innerText = contador

    if(contador >= 9999){
        contador = 9998
    }
}