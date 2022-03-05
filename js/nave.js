const yourShip = document.querySelector('.player-shooter');
const playArea = document.querySelector('#main-play-area');
const asteroidImg = ['img/asteroid_1.png', 'img/asteroid_2.png'];
const astronautaImg = 'img/astronauta.png';

//chamada das funções de movimento e tiro da nave
function flyShip(event)
{
    if(event.key === 'ArrowUp')
    {
        event.preventDefault();
        moveUp();
    }
    else if(event.key === 'ArrowDown')
    {
        event.preventDefault();
        moveDown();
    }
    else if(event.key === " ")
    {
        event.preventDefault();
        fireLaser();
    }
}

//função de subir
function moveUp()
{
    let position = parseInt(getComputedStyle(yourShip).getPropertyValue('top'));
    if(position > 0)
    {
        position -= 10;
        yourShip.style.top = position + 'px';
    }
}

//função de decer
function moveDown()
{
    let position = parseInt(getComputedStyle(yourShip).getPropertyValue('top'));
    if(position < 530)
    {
        position += 10;
        yourShip.style.top = position + 'px';
    }
}

//função de tiro
function fireLaser()
{
    let laser = createLaserElement();
    playArea.appendChild(laser);
    moveLaser(laser);
}

//Cria o elemeto tiro
function createLaserElement()
{
    //Posição da nave
    let positionY = parseInt(window.getComputedStyle(yourShip).getPropertyValue('top'));

    //Elemeto tiro
    let newLaser = document.createElement('img');
    newLaser.src = 'img/shoot.png';
    newLaser.classList.add('laser');
    newLaser.style.left = 5 + 'px';
    newLaser.style.top = (positionY - 20) + 'px';

    return newLaser;
}

//Movimenta o laser
function moveLaser(laser)
{
    let laserInterval = setInterval(() => {
        let positionX = parseInt(laser.style.left);
        let asteroids = document.querySelectorAll('.asteroid');

        /*asteroids.forEach(asteroid =>{
            if (checkLaserCollision(laser,asteroid))
            {
                asteroid.src = 'img/boom.png';
                asteroid.classList.remove('asteroid');
                asteroid.classList.add('dead-alien');
            }
        });*/

        if(positionX >= 700)
        {   
            clearInterval(laserInterval);
            playArea.removeChild(laser);   
        }
        else{
            laser.style.left = (positionX + 8) + 'px';
        }
    }, 10);
}

//funçao par cria inimigos
function createAsteroid()
    let newAsteroid = document.createElement('img');
    let asteroidSprite = asteroidImg(Math.floor(Math.random() * asteroidImg.length()));

    newAsteroid.src = asteroidSprite;
    newAsteroid.classList.add('asteroid');
    newAsteroid.classList.add('asteroid-transition');
    newAsteroid.style.left = '700px';
    newAsteroid.style.top = (Math.floor(Math.random() * 500)) + 'px';
    playArea.appendChild(newAsteroid);
    moveAsteroid(newAsteroid);
}

//função para movimentar inimigo
function moveAsteroid(asteroid)
{
    let moveAsteroidInterval = setInterval(() => {
        let positionX = parseInt(window.getComputedStyle(asteroid).getPropertyValue('left'));

        if(positionX <= 50)
        {
            if (Array.from(asteroid.classList).includes(dead-asteroid))
            {
                asteroid.remove();
            }
            else{
                //gameOver();
                console.log('gameOver!');
            }
        }
        else{
            (asteroid.style.left = positionX - 4 )+ 'px'
        }
    }, 30);    
}

// função para colisão
function checkLaserCollision(laser, asteroid)
{
    let laserTop = parseInt(laser.style.top);
    let laserLeft = parseInt(laser.style.left);
    let laserBottom = laserTop - 20;

    let asteroidTop = parseInt(asteroid.style.top);
    let asteroidLeft = parseInt(asteroid.style.left);
    let asteroidBottom = asteroidTop - 20;

    if (laserLeft != 700 && laserLeft + 40 >= asteroidLeft)
    {
       if (laserTop <= asteroidTop && laserTop >= asteroidBottom)
       {
           return true;    
       }
       else{
           return false;
       }
    }
    else{
        return false;
    }
}
window.addEventListener('keydown',flyShip);

//createAsteroid();