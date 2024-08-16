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
                'url':'javascript.png',
                'nome':'JavaScript'
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

        // Alerta de projeto em desenvolvimento
        function naoExiste() 
        {
            alert('O projeto selecionado ainda esta em desenvolvimento.'); 
        }

        // Alerta de projeto em somente para computadores
        function pc() 
        {
            alert('Modelo desenvolvido somente para Computadores de Mesa ou Notebooks.'); 
        }