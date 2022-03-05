let order = [];
let clickCount = 0;
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

//Cria ligar e deligar cor
const lightOn = (elementColor) =>{
    elementColor.classList.add('selected');
}

const lightOff = (elementColor) =>{
    elementColor.classList.remove('selected');
}

//Cria ordem aleatoria de cores
let shuffleOrder = () =>{
    let colorOrder = Math.floor(Math.random() * 4);

    order[order.length] = colorOrder;
    /*
        clickedOrder = [];

        for (let i = 0; i < order.length; i++)
        {
            let elementColor = createColorElement(order[i]);
            lightColor(elementColor);     
        }
    */

   setTimeout(() => { // tempo para iniciar
       const blink = async()=>{
           for(let i in order){
               let elementColor = createColorElement(order[i]);
               await new Promise((cooldown) => setTimeout(cooldown, time)) //tempo ligado blink
               .then(new Promise((r) => lightOn(elementColor, r)))
               new Promise((reso) => lightOff(elementColor, reso));
               await new Promise((cooldown1) => setTimeout(cooldown1,time))
           }
       }
       blink();
   }, 500);
}

/*//Acende a procima cor
let lightColor = (element)=>{

    setTimeout(() => {
        element.classList.add('selected');
        
    },100);

    setTimeout(() => {
        element.classList.remove('selected');
    }),500;
}*/

// checa se os botões clicados são os mesmos da ordem gerada no jogo
let checkOrder = (color) =>{
    let success = true;

    if (color != order[clickCount]) {
        success = false;
        return gameOver();
    }
    else{
        clickCount++;
    }

    if(clickCount == order.length && success)
    {
        score++;
        alert(`Pontuação: ${score} \Você acertou! Iniando próximo nivel`);
        return nextLevel();
    }
}

// função de click do usuario
let click = (color) => {
    if (clickCount <= order.length){
        createColorElement(color).classList.add('selected');

        setTimeout(() => {
            createColorElement(color).classList.remove('selected');
            checkOrder(color,clickCount);
        },250);
    }
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
let nextLevel = () =>{
    clickCount = 0;
    time -= score * 10;
    shuffleOrder();
}

// função para game over
let gameOver = () =>{
    alert(` Pontuação: ${score}! \n Você perdeu jogo! \n Clique em OK para iniciar um novo jogo \n`);
    order = [];
    score = 0;
    playGame();
}

let playGame = () => {
    alert('Bem vindo ao Genius! Iniciando novo jogo');
    order = [];
    score = 0;
    time = 500;
    nextLevel();
}

let time = 0;

//eventos de clique para as cores
green.onclick = () => click(0);

red.onclick = () => click(1); 

yellow.onclick = () => click(2);
 
blue.onclick = () => click(3);
 

playGame();