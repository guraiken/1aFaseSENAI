/*Um guerreiro encontrou um dragão! Se ele tiver uma espada mágica e mais de 18
anos, ele pode lutar. Se não, deve fugir.*/
let idade = prompt("Digite sua idade:")
let temEspadaMagica = prompt("Você possui a espada mágica? (Sim/Não)")

if(idade  >= 18 && temEspadaMagica == ("Sim") || temEspadaMagica ("sim") ){
    console.log("Você pode lutar contra o dragão!")
}else{
    if(idade < 18 || temEspadaMagica == ("Não") || ("Nao") || ("nao")){    
    console.log("FUJA ENQUANTO É TEMPO!")
    }
}
