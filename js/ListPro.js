const PROJ_CONTAINER = document.querySelector('.projects_container');

        const PROJ_DATA = [
            {
                'func':'',
                'href':'./sites/page/index.html',
                'src':'./img/site.png',
                'alt':'Projeto site institucional',
                'nome':'Empresarial'
            },
            {
                'func':'',
                'href':'./sites/socialPage/index.html',
                'src':'./img/site.png',
                'alt':'Projeto site Social Midia',
                'nome':'Social'
            },
            {
                'func':'onclick="naoExiste()"',
                'href':'./sites/Politicapage/index.html',
                'src':'./img/block.png',
                'alt':'Projeto em desenvolvomento',
                'nome':'?????'
            },
        ]

        const listaProjetos = (dados, container) => {
            dados.forEach(dado => {
                container.innerHTML += `<a href="${dado.href}" class="item" ${dado.func}> <img src="${dado.src}" alt="${dado.alt}"> <p>${dado.nome}</p> </a>`
            });
        }

        listaProjetos(PROJ_DATA, PROJ_CONTAINER);

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