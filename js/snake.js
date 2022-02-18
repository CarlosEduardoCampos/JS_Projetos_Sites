// Tela do jogo
let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let divScore = document.getElementById("score");
let numLives = document.getElementById("numlives")
let box = 37.5;


// Cobrinha
let snake = [];

//Posição inicial
snake[0] = {
    x:7.5 * box,
    y:7.5 * box
}

// movimentação
let direction = "right";

// Vida
let lives = 5;

function scoreLive(lives)
{
    numLives.innerText = lives;
}

// Comida
let food = {
    // cria posição aleatoria no eixo x e y 
    x: Math.floor(Math.random() * 15) * box,
    y: Math.floor(Math.random() * 14) * box
}

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

function drawFood()
{
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

// Evento espera um click no teclado
document.addEventListener('keydown', update);

function update (event)
{
    // 37 direita(right) 38 baixo(down) 39 esquerda(left) 40 alto(up)
    if (event.keyCode == 37 && direction != "right") direction = "left";
    if (event.keyCode == 38 && direction != "down")  direction = "up";
    if (event.keyCode == 39 && direction != "left")  direction = "right";
    if (event.keyCode == 40 && direction != "up")    direction = "down";
}


function iniciarJogo()
{
    //Colisão na lateral direita trenferencia para lateral equerda
    if(snake[0].x > 17 * box && direction == "right") snake[0].x = 0;

    //Colisão na lateral esquerda trenferencia para lateral direita
    if(snake[0].x < 0 && direction == "left" ) snake[0].x = 17 * box;

    //Colisão na parte superior trenferencia para parte inferior
    if(snake[0].y > 17 * box && direction == "down") snake[0].y = 0;

    //Colisão na parte inferiortrenferencia para parte superior
    if(snake[0].y < 0 && direction == "up"  ) snake[0].y = 17 * box;

    criarBG();
    criarCobrinha();
    scoreLive(lives);
    drawFood();

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
let jogo = setInterval(iniciarJogo, 200);