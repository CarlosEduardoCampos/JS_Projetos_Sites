window.addEventListener('scroll', function() {
    let scrollText = document.getElementById('logo_menu');

    if (window.scrollY > 180) { // Ajuste o valor conforme necessário
        scrollText.classList.remove('hidden');
        scrollText.classList.add('visible');
    } else {
        scrollText.classList.remove('visible');
        scrollText.classList.add('hidden');
    }
});
