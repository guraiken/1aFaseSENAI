// Ler distancia da corrida e tempo de viagem em segundos. caso o tempo de viagem for maior 
// que 60 segundos fazer em minutos e daí em diante...

function jornada(){
    let distCorrida = Number(prompt("Digite a distância da corrida: "))
    let tempoViagem = Number(prompt("Digite o tempo da viagem: "))
    let resultadoTempo = tempoViagem
    
    if(tempoViagem < 60 && tempoViagem >= 0){
        alert("O tempo de viagem foi:  " + resultadoTempo + " segundo(s).")
    }else if(tempoViagem >= 60){
        resultadoTempo = tempoViagem / 60
        alert("O tempo de viagem foi:  " + resultadoTempo + " minuto(s).")
    }else if(resultadoTempo >= 60){
        resultadoTempo = tempoViagem * 60
        resultadoTempo = resultadoTempo / 24
        alert("O tempo de viagem foi:  " + resultadoTempo + " hora(s).")
    }
}