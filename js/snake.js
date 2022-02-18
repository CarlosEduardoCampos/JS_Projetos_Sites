// Tela do jogo
let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let divScore = document.getElementById("score");
let numLives = document.getElementById("numlives")
let numFood = document.getElementById("numfood")
let box = 32;


// Cobrinha
let snake = [];

//Posição inicial
snake[0] = {
    x:8 * box,
    y:8 * box
}

// movimentação
let direction = "right";

// Vida
let lives = 3;

function scoreLive(lives)
{
    numLives.innerText = lives;
}

// Comida
let point = 0;
let food = {
    // cria posição aleatoria no eixo x e y 
    x: Math.floor(Math.random() * 15) * box,
    y: Math.floor(Math.random() * 15) * box
}

function scoreFood(food)
{
    numFood.innerText = food;
}

function criarBG()
{
    context.fillStyle = "lightgreen"; // cor de fundo
    context.fillRect(0, 0, 20 * box, 20 * box);// cria tela do game
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
    //Colisão da cabeça com o corpo
    for (let corpo = 1; corpo < snake.length; corpo++)
    {
        if (snake[0].x == snake[corpo].x && snake[0].y == snake[corpo].y)
        {
            if (lives > 0)
            {
                lives--;
            }
            else{
                clearInterval(jogo);
                alert('GAME OVER :(');
                // carrega a pagina altomaticamente
                document.location.reload(true);
            }
            
        }    
    }
    //Colisão na lateral direita trenferencia para lateral equerda
    if(snake[0].x > 19 * box && direction == "right") snake[0].x = 0;

    //Colisão na lateral esquerda trenferencia para lateral direita
    if(snake[0].x < 0 && direction == "left" ) snake[0].x = 19 * box;

    //Colisão na parte superior trenferencia para parte inferior
    if(snake[0].y > 19 * box && direction == "down") snake[0].y = 0;

    //Colisão na parte inferiortrenferencia para parte superior
    if(snake[0].y < 0 && direction == "up"  ) snake[0].y = 19 * box;

    if(point == 20)
    {
        point = 0;
        lives++;
    }

    criarBG();
    criarCobrinha();
    scoreLive(lives);
    scoreFood(point);
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // movimento para direita 
    if(direction == "right") snakeX += box;

    // movimento para esquerda
    else if(direction == "left") snakeX -= box;

    // movimento para cima
    else if(direction == "up") snakeY -= box;

    // movimeto para baixo
    else if(direction == "down") snakeY += box;

    if (snakeX != food.x || snakeY != food.y)
    {
        snake.pop();    
    }
    else{
        food.x = Math.floor(Math.random() * 15) * box;
        food.y = Math.floor(Math.random() * 15) * box;
        point++;
    }

    // cria uma nova cabeça
    let newHead ={
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);
}

// Recarrega função a cada 100ms (frame)
let jogo = setInterval(iniciarJogo, 200);