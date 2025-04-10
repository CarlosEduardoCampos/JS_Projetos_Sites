const TEC_CONTAINER = document.querySelector('.tec_container');

    const TEC_LOGOS = [
        {
            'url':'html.png',
            'nome':'HTML'
        },
        {
            'url':'css.png',
            'nome':'CSS'
        },
        {
            'url':'php.png',
            'nome':'PHP'
        },
        {
            'url':'node.png',
            'nome':'Node.js'
        }
    ]

    const listaTecnologias = (logos, container) => {
        logos.forEach(logo => {
            container.innerHTML += `<img src="./img/${logo.url}" alt="${logo.nome}" class="tec_item">`
        });
    }

    listaTecnologias(TEC_LOGOS, TEC_CONTAINER);
