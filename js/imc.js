// Recebe oque esta nos campos de digitação
const NOME = document.getElementById('nome');
const ALTURA = document.getElementById('altura');
const PESO = document.getElementById('peso');
const CALCULAR = document.getElementById('calcular');
const RESULTADO = document.getElementById('resultado');

function calcular()
{
    if (campoVazio())
    {
        alert('Todos os campos devem ser preenchidos!');
    }
    else{
        let imc = (PESO.value / (ALTURA.value ** 2));

        RESULTADO.innerHTML = '<p><i>'+imc+'</i></p>'
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
