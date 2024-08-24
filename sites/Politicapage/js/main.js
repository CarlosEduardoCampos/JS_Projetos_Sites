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
