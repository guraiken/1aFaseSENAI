mostrarLogin()
// vai deixar no foco quando abrir a pagina

function mostrarLogin(){
    esconderTodas()
    document.getElementById("login").style.display = "flex"
    document.getElementById("inpLogNome").focus()
}

function mostrarCadastro(){
    esconderTodas()
    document.getElementById("cadastro").style.display = "flex"
    document.getElementById("inpCadEmail").focus()
}

function mostrarProdutos(){
    esconderTodas()
    document.getElementById("produtos").style.display = "flex"
}

function esconderTodas(){
    document.getElementById("cadastro").style.display = "none"
    document.getElementById("login").style.display = "none"
    document.getElementById("produtos").style.display = "none"
    //esconder novas paginas
}

// variaveis de nome, email e senha
// let email, nome, senha

let usuario = {
    email: '',
    nome: '',
    senha: ''
}

function cadastrar(){
    usuario.email = document.getElementById("inpCadEmail").value
    usuario.nome = document.getElementById("inpCadName").value
    usuario.senha = document.getElementById("inpCadPass").value
    alert("Usuário cadastrado!")
    
    limparInputs()
    mostrarLogin()
}

function logar(){
    let nome = document.getElementById("inpLogNome").value === usuario.nome ? true : false
    let senha = document.getElementById("inpLogSenha").value === usuario.senha ? true : false

    if(nome == true && senha == true){
        alert("Login efetuado com sucesso!")
        limparInputs()
        mostrarProdutos()
    }else{ 
        alert("Login efetuado sem sucesso!")
    }
}

function limparInputs(){
    document.getElementById('inpCadName').value = ''
    document.getElementById('inpCadEmail').value = ''
    document.getElementById('inpCadPass').value = ''
    
    document.getElementById('inpLogNome').value = ''
    document.getElementById('inpLogSenha').value = ''
}