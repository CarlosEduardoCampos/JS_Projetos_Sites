'use strict';

// Imagens que seram usadas no slide
const IMAGES = [
    {
        'id': '0',
        'url':'../img/lugar_00.jpg'
    },

    {
        'id': '1',
        'url':'../img/lugar_01.jpg'
    },

    {
        'id': '2',
        'url':'../img/lugar_02.jpg'
    },

    {
        'id': '3',
        'url':'../img/lugar_03.jpg'
    },
    {
        'id': '5',
        'url':'../img/lugar_05.jpg'
    },

    {
        'id': '6',
        'url':'../img/lugar_06.jpg'
    }
]

// Area onde as imagens seram mostradas
const CONTAINER = document.getElementById('items');

// Função que cria uma seguencia de imagens dentro de uma div 
const loadImages = (images, container) =>{
    images.forEach(image => {
        container.innerHTML += `<div class='item'>
            <img src = '${image.url}'>
        </div>`
    });
}

// Cria o slide com as imagens recebidas
loadImages( IMAGES, CONTAINER);

// recebe uma lista das imagens da pagina
let items = document.querySelectorAll('.item');

// Muda a posição da primeira imagem para ultima posição
const previous = () => {
    CONTAINER.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

// Muda a posição da ultima imagem para a primeira posição
const next = () => {
    const lastItem = items[items.length - 1];
    CONTAINER.insertBefore(lastItem, items[0])
    items = document.querySelectorAll('.item');
}

// Passa para a proxima imagem altomaticamente
setInterval(() => {
    next()
}, 10000);
