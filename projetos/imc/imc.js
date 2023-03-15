// Recebe oque esta nos campos de digitação
const NOME = document.getElementById('nome');
const ALTURA = document.getElementById('altura');
const PESO = document.getElementById('peso');
const CALCULAR = document.getElementById('calcular');
const RESULTADO = document.getElementById('resultado');

function calcular()
{
    nome = NOME.value;
    peso = PESO.value.replace(',', '.');
    altura = ALTURA.value.replace(',', '.');
    msg = ''

    if (campoVazio())
    {
        alert('Todos os campos devem ser preenchidos!');
    }
    else{
        let imc = (peso / (altura ** 2));

        msg = `<i>${nome} seu IMC é ${imc.toFixed(1)} e você está `;

        if (imc < 18.6) 
        {
            msg += 'abaixo do peso <i>';
        }
        else if( imc < 25)
        {
            msg += 'normal <i>';
        } 
        else if(imc < 30)
        {
            msg += 'acima do peso <i>';
        }
        else if(imc < 35)
        {
            msg += 'com obesidade grau I  <i>';
        }
        else if(imc < 40)
        {
            msg += 'com obesidade grau II  <i>';
        }
        if(40 < imc)
        {
            msg += 'com obesidade grau III  <i>';
        }

        RESULTADO.innerHTML = msg;
    }
}

function campoVazio()
{
    if (NOME.value === '') 
    {
        return true;
    }
    else if(ALTURA.value === '')
    {
        return true;
    }
    else if(PESO.value === '')
    {
        return true;
    }
    else{
        return false;
    }
}
