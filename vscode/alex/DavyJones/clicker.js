let contador = 0
let contadorSalvo = localStorage.getItem('contador');

if (contadorSalvo) {
    contador = Number(contadorSalvo);
    document.getElementById("contadordeClick").innerText = contador;
}
function clicker(){ // soma de cliques do botão
    contador++

    let mostrarContador = document.getElementById("contadordeClick");
    mostrarContador.innerText = contador

    localStorage.setItem("contador", contador)
}