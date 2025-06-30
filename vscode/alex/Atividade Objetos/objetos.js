    const produtos = [
    { nome: "arroz", preco: 5.99 },
    { nome: "feijão", preco: 6.50 },
    { nome: "macarrão", preco: 4.25 }
];

function exer1(){
    let pergunta = prompt("Digite o nome do produto que deseja:")
    let encontrarProduto = produtos.find(produto=> produto.nome.toLowerCase() === pergunta)
    let produtoFormatado = `Nome: ${encontrarProduto.nome}\n Preço: ${encontrarProduto.preco}`
    alert(produtoFormatado)
}

const livro = {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    statusDeEmprestimo: "disponível",
    emprestar: function(){
        if(this.statusDeEmprestimo === "disponível"){
            this.statusDeEmprestimo = "emprestado";
            console.log("Livro emprestado")
        }else{
            console.log("Livro ja foi emprestado")
        }
    },
    devolver: function(){
        if(this.statusDeEmprestimo === "emprestado"){
            this.statusDeEmprestimo = "disponível";
            console.log("O livro foi devolvido")
        }else{
            console.log("Este livro já foi devolvido")
        }
    }
}

function exer2(){
    console.log(livro)
    console.log("use livro.emprestar() e livro.devolver() no console")
}

//fiz com 1 função pois achei mais fácil

function exer3(){ 
    let perguntaMedida = prompt("Digite a medida que será convertida para (c ou f):").toLowerCase()
    let calcular = Number(prompt("Digite a temperatura:"))
    
    const temperatura = {
        calculo: calcular,
        medida: perguntaMedida == "c"? "Celsius" : "Fahrenheit",
        
        conversor: function(){
            if(this.medida === "Fahrenheit"){
                let f = (this.calculo * 1.8) + 32 
                let resultado = `${calcular.toFixed(2)}C em Fahrenheit é ${f.toFixed(2)}F`
                return resultado
            }else if(this.medida === "Celsius"){
                let c = (this.calculo - 32) / 1.8 
                let resultado = `${calcular.toFixed(2)}F em Celsius é ${c.toFixed(2)}C`
                return resultado
            }
        }
    }   
    alert(temperatura.conversor());
}

//exer 4

const agenda = {
    contatos: [],

    adicionarContato: function(){
        nome = prompt("Digite o nome de contato")
        telefone = prompt("Digite o número de telefone")
        this.contatos.push({nome, telefone});
    },
    removerContato: function(){
        nome = prompt("Digite o contato que deseja remover")
        let indice = this.contatos.findIndex(contato=> contato.nome === nome);
        if(indice !== -1){
            this.contatos.splice(indice, 1)
            alert(`o contato ${nome}, foi removido`)
        }else{
            alert("Näo foi encontrado o contato")
        }
    },
    listarContatos: function(lista){
        if(this.contatos.length > 0){
            lista = this.contatos.forEach((contato, index)=> {
                console.log(`${index + 1}. Nome: ${contato.nome} Telefone: ${contato.telefone}`)
            })
        }else{
            console.log(`Não foi encontrado nenhum contato`)
        }
    }
}

// exer 5

const aluno = {
    notas: [{
        Matemática: 10,
        Inglês: 8,
        Português: 7,
        Geografia: 8,
        História: 6,
        Ciências: 8,
    }
    ],
    

    media: function(media){
        const notasObj = this.notas[0]
        const valores = Object.values(notasObj)

        total = valores.reduce((nota, acumulador)=> nota + acumulador, 0)
        media = total / valores.length
        console.log(`A média é ${media.toFixed(2)}`)
    }
}


// exer 6

const carrinho = {
    itens: [
        {nome: "beterraba", valor: 6, quantidade: 5},
        {nome: "pão", valor: 14, quantidade: 12},
        {nome: "alecrim", valor: 4, quantidade: 8},
        {nome: "peixe-espada", valor: 50, quantidade: 3},
        {nome: "alface", valor: 12, quantidade: 5},
    ],

    adicionarItem: function(){
        nome = prompt("Que item você quer adicionar?").toLowerCase()
        valor = Number(prompt("Qual o valor do item?"))
        quantidade = Number(prompt("Quantos você quer levar?"))
        this.itens.push({nome, valor, quantidade})
    },
    removerItem: function(){
        nome = prompt("Digite o nome do item que deseja remover").toLowerCase()
        let local = this.itens.findIndex(item => item.nome === nome)
        nome = this.itens.splice(local, 1)
    },
    total: function(soma){
        soma = this.itens.reduce((soma, item)=> {
            let total = soma + item.valor * item.quantidade
            return total
        }, 0);
        console.log("R$: "+ soma)
    }
}

// exer 7

const alunos = [
  { nome: "Ana", media: 9 },
  { nome: "Bruno", media: 7.5 },
  { nome: "Carla", media: 8 },
  { nome: "Daniel", media: 6.2 },
  { nome: "Eduarda", media: 10 },
  { nome: "Felipe", media: 5.5 },
  { nome: "Giovana", media: 9.3 },
  { nome: "Henrique", media: 4 },
  { nome: "Isabela", media: 7.8 },
  { nome: "João", media: 6.9 }
]

function filtrarAprovados(){
    let aprovados = alunos
    .filter(aluno=> aluno.media > 6)
    .map(aluno=> aluno.nome)
    console.log(aprovados)
}

// exer 8

const moedas = {
    taxas: {
        dolar: 1, //vai ser a base
        real: 5.55,
        euro: 0.85,
        ienes: 110,
    },

    converterValor: function(valor,de,para){
        valor = prompt("Digite a quantidade que voce quer converter")
        de = prompt("de que moeda você vai estar convertendo")
        para = prompt("para qual moeda quer converter")
        const valorEmDolar = valor / this.taxas[de]
        const valorConvertido = valorEmDolar * this.taxas[para]

        alert(valorConvertido.toFixed(2))
        return valorConvertido.toFixed(2)
    }
}

// exer 1 lista 2

const banco = {
    contas: [
        { nome: "Ana", saldo: 1200 },
        { nome: "Bruno", saldo: 3400 },
        { nome: "Carla", saldo: 580 },
        { nome: "Daniel", saldo: 2750 },
        { nome: "Eduarda", saldo: 9200 },
        { nome: "Felipe", saldo: 1800 },
        { nome: "Giovana", saldo: 430 },
        { nome: "Henrique", saldo: 3600 },
        { nome: "Isabela", saldo: 250 },
        { nome: "João", saldo: 6700 },
    ],

    depositar: function(){
        nome = prompt("Digite o nome da conta que deseja depositar")
        saldo = Number(prompt("Digite o valor que deseja depositar"))
        let conta = this.contas.find(conta=> conta.nome === nome)
        conta.saldo += saldo
        console.log(`Depósito de R$${saldo} realizado na conta de ${nome}. Novo saldo: R$${conta.saldo}`);
    },
    sacar: function(){
        nome = prompt("Digite o nome da conta que deseja sacar")
        saldo = Number(prompt("Digite o valor que deseja sacar"))
        let conta = this.contas.find(conta=> conta.nome === nome)
        conta.saldo -= saldo
        console.log(`Saque de R$${saldo} realizado na conta de ${nome}. Novo saldo: R$${conta.saldo}`)
    }
};

// exer 2 lista 2

const eleicao = {
    candidatos: [
        { nome: "Adalberto", votos: 400 },
        { nome: "Marinalva", votos: 750 },
        { nome: "João do Gás", votos: 1200 },
        { nome: "Zezinho do Pneu", votos: 300 },
        { nome: "Dr. Cacto", votos: 980 },
        { nome: "Tia Cleusa", votos: 450 }
    ],
    votar: function(){
        listadeCandidatos = this.candidatos.forEach((candidato)=>
            console.log(`${candidato.nome} tem ${candidato.votos} votos`)
        )
        let nomeCandidato = prompt("Digite o nome do candidato que deseja votar")
        let votoCandidato = this.candidatos.find(candidato=> candidato.nome === nomeCandidato)
        console.log(`Candidato ${votoCandidato.nome} votado!`)
        votoCandidato.votos ++
        console.log(`${votoCandidato.nome} ${votoCandidato.votos} votos`)
    },
    maisVotado: function(){
        let candidatosvotos = this.candidatos.map(candidato=> candidato.votos)
        let votos = Math.max(...candidatosvotos)
        let candidatonome = this.candidatos.find(candidato=> candidato.votos == votos)
        console.log(`${candidatonome.nome} é o candidato com mais votos, possui ${votos} votos`)
    }

}

// exer 3 lista 2

const agendaSemanal = {
    segunda: [],
    terca: [],
    quarta: [],
    quinta: [],
    sexta: [],

    adicionarCompromisso: function(){
        let diaSemana = prompt("Digite o dia da semana:").toLowerCase()
        let compromisso = prompt("Digite seu compromisso")
        let adicionar = this[diaSemana].push(compromisso)
        console.log(`${compromisso} foi adicionado na ${diaSemana}`)
    },
    removerCompromisso: function(){
        let diaSemana = prompt("Digite o dia da semana").toLowerCase()
        let compromisso = prompt("Digite seu compromisso para remover")
        const index = this[diaSemana].indexOf(compromisso)
        this[diaSemana].splice(index, 1)
        console.log(compromisso + " foi removido de " + diaSemana)
    },
    listarCompromissos: function(){
        let diaSemana = prompt("Digite o dia da semana").toLowerCase()
        console.log(`Seus compromissos ${diaSemana} são:`)
        let listar = this[diaSemana].forEach((compromisso, index)=>{
            console.log(`\n ${index + 1} - ${compromisso}`)
        })
    }
}

// exer 4 lista 2

const rpg = {
    personagens: [],
    gerarAtributoAleatorio: function(max, min){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    criarPersonagem: function(){
        nome = prompt("Digite o nome do seu personagem:")
        let forca = this.gerarAtributoAleatorio(5, 20)
        let destreza = this.gerarAtributoAleatorio(5, 20)
        let vida = this.gerarAtributoAleatorio(70, 150)

        let criar = this.personagens.push({nome, forca, destreza, vida})
    },
    listarPersonagens: function(){
        let mostrar = this.personagens.forEach((personagem, index)=>{
            console.log(`Personagem ${index + 1}: ${personagem.nome}\n Força: ${personagem.forca}\n Destreza: ${personagem.destreza}\n Vida: ${personagem.vida} `)
        })
    }
}

// exer 5 lista 2

const login = {
    usuarios: [],

    criarUsuario: function(){
        let email = prompt("Digite seu email:")
        let nome = prompt("Digite seu nome")
        let idade = prompt("Digite sua idade")
        let senha = prompt("Digite sua senha")
        let novoUsuario = {email, nome, idade, senha}
        console.log(validarFormulario(novoUsuario))
        this.usuarios.push({email, nome, idade, senha, atividade: "offline"})
        console.log("Usuário criado!")
    },
    
    logar: function(){
        let email = prompt("Digite seu email")
        let senha = prompt("Digite sua senha")
        let achar = this.usuarios.find(usuario=> usuario.email === email && usuario.senha === senha)
        let index = this.usuarios.findIndex(usuario=> usuario === achar)

        if(achar){
            console.log("Usuário logado!")
            this.usuarios[index].atividade += "online"; 
        }else{
            console.log("Senha ou email incorreto(s)")
            this.usuarios[index].atividade += "offline";
        }
    },
}

function validarFormulario(dados) {
  const resultado = {};

  // Validação do nome
  if(!dados.nome || dados.nome.length < 3){
    resultado.nome = "Nome deve ter pelo menos 3 caracteres.";
  }else{
    resultado.nome = "Nome válido.";
  }

  // Validação do email
  if(!dados.email || !dados.email.includes("@")){
    resultado.email = "Email inválido.";
  }else{
    resultado.email = "Email válido.";
  }

  // Validação da idade
  if(isNaN(dados.idade) || dados.idade < 0 || dados.idade > 120){
    resultado.idade = "Idade inválida.";
  }else{
    resultado.idade = "Idade válida.";
  }

  return resultado;
}

// exer 6 lista 2

const sistemaProjetos = {
    projetos: [
        {
        nome: "Site da Padaria",
        status: "em andamento",
        tarefas: [
            { nome: "Criar layout", data: "2025-07-01", status: "concluído" },
            { nome: "Responsividade", data: "2025-07-02", status: "em andamento" },
            { nome: "Formulário de contato", data: "2025-07-03", status: "pendente" }
        ]
        },
        {
        nome: "App de Receitas",
        status: "em andamento",
        tarefas: [
            { nome: "Tela de cadastro", data: "2025-07-05", status: "em andamento" },
            { nome: "Banco de dados", data: "2025-07-06", status: "pendente" },
            { nome: "Testes", data: "2025-07-10", status: "pendente" }
        ]
        }
    ],
    alterarStatus: function(){
        let nome = prompt("Digite o nome do projeto")
        let tarefas = prompt("Nome da tarefa")
        let novostatus = prompt("Altere o status do projeto") 

        const projeto = this.projetos.find(projeto=> projeto.nome === nome)
        const tarefa = projeto.tarefas.find(tarefa=> tarefa.nome === tarefas)

        tarefa.status = novostatus
        console.log(`Status da tarefa foi alterado para ${novostatus}`)
    },
    listarStatus: function(){
        let projetoNome = prompt("Digite o nome do projeto que deseja procurar")
        let filtroStatus = prompt("Digite o status que deseja procurar")
        let procurar = this.projetos.find(proj=> proj.nome === projetoNome)
        let filtro = procurar.tarefas.filter(tarefa=> tarefa.status === filtroStatus)

        console.log(`Tarefas com status "${filtroStatus}" no projeto "${projetoNome}":`);
        filtro.forEach(tarefa => {
        console.log(`- ${tarefa.nome} (Data: ${tarefa.data})`);
        })
    }
}

// exer 7 lista 2

const jogoDeDados = {
    historico: [],

    rolar: function(){
        const dado1 = Math.floor(Math.random() * 6) + 1;
        const dado2 = Math.floor(Math.random() * 6) + 1;
        const resultado = { dado1, dado2 };

        this.historico.push(resultado)

        console.log(`Você rolou ${dado1} no primeiro dado e ${dado2} no segundo`)
        return resultado
    },

    contar: function(){
        let numero = Number(prompt("Que número deseja contar?"))
        let contador = 0

        this.historico.forEach(rolagem=> {
            if (rolagem.dado1 === numero) contador++;
            if (rolagem.dado2 === numero) contador++;
        })
        console.log(`O número ${numero} saiu ${contador} vezes!`)
    }
}