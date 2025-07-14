let valorSalvo = localStorage.getItem('cont');
const textarea = document.getElementById('texto');

if (valorSalvo === null) {
    valorSalvo = 0;
    localStorage.setItem('cont', valorSalvo);
} else {
    valorSalvo = parseInt(valorSalvo);
}

document.getElementById("contador").innerText = valorSalvo;

function diminuirCont(){
    let span = document.getElementById("contador");
    let novoValor = Number(span.innerText) - 1;
    span.innerText = novoValor;
    localStorage.setItem("cont", novoValor);
}

function aumentarCont(){
    let span = document.getElementById("contador");
    let novoValor = Number(span.innerText) + 1;
    span.innerText = novoValor;
    localStorage.setItem("cont", novoValor);
}

// carrega o texto salvo quando a página é aberta
// Pega o valor da chave texto que ta no localStorage
const textoSalvo = localStorage.getItem('texto');

// Se existir algum texto salvo (se não for nulo), coloca ele dentro do textarea
if (textoSalvo) {
    textarea.value = textoSalvo;
}

// salva o texto toda vez que o usuário digitar algo
textarea.addEventListener('input', () => {
    // Salva o valor atual do textarea no localStorage, usando a chave "texto"
    localStorage.setItem('texto', textarea.value);
});

//exer 3 não consegui fazer


//exer 4
let textoUsuario = document.getElementById("saudar")
let usuario  = localStorage.getItem("user")
if(usuario == null || usuario == undefined){
    usuario = prompt("Digite seu nome") 
    localStorage.setItem("user", usuario)
    usuario = localStorage.getItem("user")
    textoUsuario.innerHTML = `Saudações, ${usuario}`
}else{
    textoUsuario.innerHTML = `Saudações, ${usuario}`
}
// exer 4 acaba

//exer 5 

const container = document.getElementById("container")
//Cria o localStorage
const corSalva = localStorage.getItem("color")

if(corSalva){
    container.style.backgroundColor = corSalva;
}

//funções dos botoes
function botaoCinza(){
    let novaCor = container.style.backgroundColor = "rgb(88, 88, 88)"
    //salva no localStorage
    localStorage.setItem("color", novaCor)
}
function botaoCarmesin(){
    let novaCor = container.style.backgroundColor = "rgb(196, 54, 54)"
    localStorage.setItem("color", novaCor)
}
function botaoBranco(){
    let novaCor = container.style.backgroundColor = "white"
    localStorage.setItem("color", novaCor)
}
// exer 6

const botaoTema = document.getElementById("botao-tema")

function aplicarModoNoturno(ativar){
    if(ativar){
        container.classList.add("modo-noturno")
    }else{
        container.classList.remove("modo-noturno")
    }
}

botaoTema.addEventListener("click", ()=> {
    const estaAtivo = container.classList.contains('modo-noturno')
    
    if(estaAtivo){
        aplicarModoNoturno(false);
        localStorage.removeItem("modoNoturno")
    }else{
        aplicarModoNoturno(true)
        localStorage.setItem("modoNoturno", "true")
    }
})

//exer 8 e 7 eu não consegui fazer também

// exer 9
function mensagemPerson(){
        let mensagemEscrita = document.getElementById("mensagemPerso").value
        localStorage.setItem("mensagem", mensagemEscrita);
        let mensagem = document.getElementById("mensagem")
        mensagem.innerHTML = mensagemEscrita
}
carregarMensagem()

function carregarMensagem(){
    const mensagemSalva = localStorage.getItem("mensagem")
    if(mensagemSalva){
        document.getElementById("mensagem").innerHTML = mensagemSalva
    }
}

//exer 10

function iniciarNovoJogo() {
    // Gera um número aleatório entre 1 e 10
    const novoNumeroSecreto = gerarNumeroAleat(1, 10);

    localStorage.setItem("numeroSalvo", novoNumeroSecreto);
    document.getElementById("mensagemErro").innerHTML = "Digite um número e tente a sorte!";
    document.getElementById("inputSecreto").value = "";
    console.log("Um novo jogo começou! O número secreto foi salvo.");
}

function verificarTentativa() {
    const numeroSalvo = localStorage.getItem("numeroSalvo");
    const numeroDigitado = document.getElementById("inputSecreto").value;
    const mensagem = document.getElementById("mensagemErro");

    if(!numeroSalvo){
        mensagem.innerHTML = "O jogo não foi iniciado. Clique em 'Novo Jogo'.";
        return; 
    }
    if(numeroSalvo === numeroDigitado){
        mensagem.innerHTML = `Número correto (${numeroSalvo}), você ganhou! Um novo jogo vai começar.`;
        iniciarNovoJogo();
    }else{
        mensagem.innerHTML = "Número errado, tente novamente.";
    }
}

function exer1(){
    document.getElementById("paginaContador").style.display = "flex"
}
function exer2(){
    document.getElementById("paginaExer2").style.display = "flex"
}
function exer5(){
    document.getElementById("paginaExer5").style.display = "flex"
}
function exer6(){
    document.getElementById("paginaExer6").style.display = "flex"
}
function exer9(){
    document.getElementById("paginaExer9").style.display = "flex"
}
function exer10(){
    document.getElementById("paginaExer10").style.display = "flex"
}


function escondertudo(){
    document.getElementById("paginaContador").style.display = "none"
    document.getElementById("paginaExer2").style.display = "none"
    document.getElementById("paginaExer5").style.display = "none"
    document.getElementById("paginaExer6").style.display = "none"
    document.getElementById("paginaExer9").style.display = "none"
    document.getElementById("paginaExer10").style.display = "none"
}

function gerarNumeroAleat(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}