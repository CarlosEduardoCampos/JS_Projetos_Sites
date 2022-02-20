let order = [];
let clickedOrder = [];
let score = 0;

/**
 * Dicionario das cores:
 * 0 - verde
 * 1 - verelho
 * 2 - amarelo
 * 3 - azul
*/

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');


//Pausa o programa por alguns segundos
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

//Cria ordem aleatoria de cores
let shuffleOrder = () =>{
    let colorOrder = Math.floor(Math.random() * 4);

    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i = 0; i < order.length; i++)
    {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor);     
    }
}

//Acende a procima cor
let lightColor = (element)=>{

    setTimeout(() => {
        element.classList.add('selected');
        
    },1000);

    setTimeout(() => {
        element.classList.remove('selected');
    }),300;
}

// checa se os botões clicados são os mesmos da ordem gerada no jogo
let checkOrder = () =>{
    for(let i in clickedOrder)
    {
        if(clickedOrder[i] != order[i])
        {
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length)
    {
        alert('\n Você acertou! Iniciando próximo nível!\nPontuação: ',score);
        nexLevel();
    }
}

// função de click do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() =>{
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },100)
}

// função que retorna a cor
let createColorElement = (color) => {
    switch (color) {
        case 0:
        return green;

        case 1:
        return red;

        case 2:
        return yellow;

        case 3:
        return blue;
    }
}

// função para proximo nivel do jogo
let nexLevel = () =>{
    score++;
    shuffleOrder();
}

// função para game over
let gameOver = () =>{
    alert('!\nVocê perdeu jogo!\nClique em OK para iniciar um novo jogo\nPontuação: ',score);
    order = [];
    clickedOrder = [];
    playGame();
}

let playGame = () => {
    alert('Bem vindo ao Gênesis! Iniciando novo jogo');
    score = 0;

    nexLevel();
}

/*green.addEventListener('click',click(0));
red.addEventListener('click',click(1));
yellow.addEventListener('click',click(2));
blue.addEventListener('click',click(3));*/

//eventos de clique para as cores
green.onclick = () => click(0);

red.onclick = () => click(1); 

yellow.onclick = () => click(2);
 
blue.onclick = () => click(3);
 

playGame();