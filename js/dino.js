const Dino = document.getElementById("dino");
const Backgroud = document.getElementById("backgroud");
let Score = document.getElementById("time")
let isJumping = false;
let position = 0;
let time = 0;

// Reação de clicar spaço 

function handleKeyUp(event)
{
    if (event.keyCode == 32)
    {
        if (!isJumping)
        {
            jump(); 
        }
    }
}

document.addEventListener('keyup', handleKeyUp)

// Animação de pulo
function jump()
{
    isJumping = true;

    // Subida do pulo
    let upInterval = setInterval(() => {

        if (position >= 150) 
        {
            clearInterval(upInterval);

            // Decida do pulo
            let downInterval = setInterval(()=>{
                if (position <= 0)
                {
                    clearInterval(downInterval);
                    isJumping = false;
                }
                else{
                    // subitrai valor da propriendade bottom
                    position -= 20;
                    Dino.style.bottom = position + 'px'; 
                }
                
            },30)
        }
        else{
            // soma valor na propriendade bottom
            position += 20;
            Dino.style.bottom = position + 'px';
        }

    }, 25);
}

function createCactus()
{
    //Cria elemeto cactus dentro do backgroud
    const cactus = document.createElement('div');

    let cactusPosition = 1500;
    let randomTime = Math.floor(Math.random() * 5000);
    
    cactus.classList.add('cactus');
    cactus.style.left = 1500 + 'px';

    Backgroud.appendChild(cactus);

    // Movimento do cactus
    let leftinterval = setInterval(() => {
        if (cactusPosition > -20)
        {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
        else{
            // Para o movimento e apaga o cactus
            clearInterval(leftinterval);
            Backgroud.removeChild(cactus);
        }

        if (cactusPosition < 100 && cactusPosition > 0 && position < 40)
        {
            clearInterval(leftinterval);
            alert("GAME OVER");
            Backgroud.removeChild(cactus);
            document.location.reload(true);
        }
    },20)

    setTimeout(createCactus, randomTime);
}

let somatime = setInterval(() => {
    Score.innerText = time++;
}, 500);

createCactus();


