function mostrarLogin(){
    esconderTodas()
    document.getElementById("login").style.display = "flex"
}

function mostrarCadastro(){
    esconderTodas()
    document.getElementById("cadastro").style.display = "flex"
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
    mostrarLogin()
}

function logar(){
    let nome = document.getElementById("inpLogNome").value === usuario.nome ? true : false
    let senha = document.getElementById("inpLogSenha").value === usuario.senha ? true : false

    if(nome == true && senha == true){
        alert("Login efetuado com sucesso!")
        mostrarProdutos()
    }else{ 
        alert("Login efetuado sem sucesso!")
    }
}