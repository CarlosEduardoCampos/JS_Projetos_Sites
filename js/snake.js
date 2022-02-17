// Tela do jogo
let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 37.5;

// Cobrinha
let snake = [];

snake[0] = {
    x:8 * box,
    y:8 * box
}

// movimentação
let direction = "right";


function criarBG()
{
    context.fillStyle = "lightgreen"; // cor de fundo
    context.fillRect(0, 0, 18.75 * box, 18.75 * box);// cria tela do game
}

function criarCobrinha()
{
    // Dar cor a todos os espaços no array
    for (let i= 0; i < snake.length; i++)
    {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function iniciarJogo()
{
    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // movimento para direita 
    if(direction == "right") snakeX += box;

    // movimento para esquerda
    if(direction == "left") snakeX -= box;

    // movimento para cima
    if(direction == "up") snakeY -= box;

    // movimeto para baixo
    if(direction == "down") snakeY += box;

    snake.pop();

    // cria uma nova cabeça
    let newHead ={
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);
}

// Recarrega função a cada 100ms (frame)
let jogo = setInteval(iniciarJogo, 100);