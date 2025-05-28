function chamarCadastro(){
    document.getElementById("container-cadastro").style.display = "flex"
    document.getElementById("container-principal").style.display = "none"
}

function voltarCadastro(){
    document.getElementById("container-principal").style.display = "flex"
    document.getElementById("container-cadastro").style.display = "none"
}

function adicionarItem(){
    let itemAdicionar = document.getElementById("nome").value // pega o nome do item
    let lista = document.getElementById("minhalista")

    if(itemAdicionar.length <= 20){
        let li = document.createElement("li")
        let conteudo = `<li> <span>${itemAdicionar}</span> <svg class="editar-lapis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#c59eff" viewBox="0 0 256 256"><path d="M224,128v80a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h80a8,8,0,0,1,0,16H48V208H208V128a8,8,0,0,1,16,0Zm5.66-58.34-96,96A8,8,0,0,1,128,168H96a8,8,0,0,1-8-8V128a8,8,0,0,1,2.34-5.66l96-96a8,8,0,0,1,11.32,0l32,32A8,8,0,0,1,229.66,69.66Zm-17-5.66L192,43.31,179.31,56,200,76.69Z"></path></svg><svg class="lixeira" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#f5d400" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"></path></svg></li>`
        li.innerHTML = conteudo
        lista.appendChild(li)
    }else if(itemAdicionar.length > 20){
        alert("Coloque no máximo 20 carácteres.")
    }
}

function removerdaLista(){

}