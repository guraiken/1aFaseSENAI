inicializar()
// vai deixar no foco quando abrir a pagina
// variaveis de nome, email e senha em objeto.

let usuarios = []

// primeiro teste de array
// let nomesTeste = []
// nomesTeste.push("Zé roberto") 

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
    document.getElementById("navbar").style.display = "flex"
}

function esconderTodas(){
    document.getElementById("cadastro").style.display = "none"
    document.getElementById("login").style.display = "none"
    document.getElementById("produtos").style.display = "none"
    //esconder novas paginas
}

function cadastrar(){
    let usuario = {
        email: document.getElementById("inpCadEmail").value,
        nome: document.getElementById("inpCadName").value,
        senha: document.getElementById("inpCadPass").value
    }
    
    usuarios.push(usuario)
    limparInputs()
    mostrarLogin()
    
    alert("Usuário cadastrado!")
    
    console.log(usuarios)
}

function logar(){
    let nomeUsuario = document.getElementById("inpLogNome").value
    let senhaUsuario = document.getElementById("inpLogSenha").value

    for(let i = 0; i< usuarios.length; i++ ){
        usuarios[i].nome
        usuarios[i].email
        usuarios[i].senha
        if((nomeUsuario === usuarios[i].nome || nomeUsuario === usuarios[i].email) && senhaUsuario == usuarios[i].senha){
            limparInputs()
            mostrarProdutos()
            alert("Login efetuado com sucesso!" + " Olá " + usuarios[i].nome)
        }
        // }else{ 
        //     alert("O login não pôde ser efetuado.")
        // }
    }
}

function limparInputs(){
    document.getElementById('inpCadName').value = ''
    document.getElementById('inpCadEmail').value = ''
    document.getElementById('inpCadPass').value = ''
    
    document.getElementById('inpLogNome').value = ''
    document.getElementById('inpLogSenha').value = ''
}

function inicializar(){
    mostrarLogin()
}