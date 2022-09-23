const lamp = document.getElementById('lamp');
const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');


function estaQuebrada(){
    return lamp.src.indexOf('quebrada') > -1;
}

function ligarlamp(){
    if(!estaQuebrada()){
    lamp.src="imagens/ligada.jpg";
}
}

function desligarlamp(){
    if(!estaQuebrada()){
    lamp.src="imagens/desligada.jpg";
    }
}

function lampquebrada(){
    if(!estaQuebrada()){
    lamp.src="imagens/quebrada.jpg";
    }
}




ligar.addEventListener('click', ligarlamp);
desligar.addEventListener('click', desligarlamp);
lamp.addEventListener('mouseover', ligarlamp);
lamp.addEventListener('mouseout', desligarlamp);
lamp.addEventListener('dblclick', lampquebrada);