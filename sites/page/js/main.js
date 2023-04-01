// Selecina o comteiner onde sera mostrado as logos
const LOGO_CONTAINER = document.querySelector('.clients_container');

// Lista os nomes dos arquivos de logo
const LOGOS  = [
    { 'url':'netflix.png' },
    { 'url':'google.png' },
    { 'url':'apple.png' },
    { 'url':'microsoft.png'}
];

// FCria a teg img e a add no container
const loadLogos = (images, container) => {
    images.forEach(img => {
        try {
            container.innerHTML +=  `<img src='${'../img/'+img.url}' alt='${img.url}' class='client'>`;
        } 
        catch (error) {
            console.log(error)
        }
    });
}

// Cria lista de logos
loadLogos(LOGOS, LOGO_CONTAINER);

// Seleciona container de Galeria
const GALERIA_CONTAINER = document.querySelector('#gallerry_container');

// Lista o nome dos arquivos de imagem da galeeria
const IMAGES = [
    {'url':'image-1.jpeg'},
    {'url':'image-2.jpeg'},
    {'url':'image-3.jpeg'},
    {'url':'image-4.jpeg'},
    {'url':'image-5.jpeg'},
    {'url':'image-6.jpeg'}
];

// Cria cria a tag img e add ao container
const loadImages = (images, container) =>{
    images.forEach(img => {
        container.innerHTML += `<img src='${'../img/'+img.url}' alt="${img.url}" class='gallerry-image'>`;
    });
}

// Cria lista de imagens da galeria
loadImages(IMAGES, GALERIA_CONTAINER);


const MENU_ITEMS= document.getElementById('navbar_items');
const HAMBURGUER = document.querySelector('#navbar_hamburguer');

HAMBURGUER.addEventListener('click', () => {
    if (MENU_ITEMS.style.display === 'none') {
        MENU_ITEMS.style.display = 'flex';
    }
    else {
        MENU_ITEMS.style.display = 'none';
    }
});
/*
// Sticky menu background
window.addEventListener("scroll", function () {
    if (window.scrollY > 150) {
        document.querySelector("#navbar").style.opacity = 0.9;
    } else {
        document.querySelector("#navbar").style.opacity = 1;
    }
});*/
