const PROJ_CONTAINER = document.querySelector('.projects_container');

    const PROJ_DATA = [
        {
            'func':'',
            'href':'./sites/ricardoPiantino/index.html',
            'src':'./img/site.png',
            'alt':'link home page candidato politico',
            'nome':'Política-00'
        },{
            'func':'',
            'href':'./sites/saraMariano/index.html',
            'src':'./img/site.png',
            'alt':'link home page candidato politico',
            'nome':'Política-01'
        },
        {
            'func':'',
            'href':'./sites/lunetaTv/index.html',
            'src':'./img/site.png',
            'alt':'link home page empresa de mackenting',
            'nome':'Luneta'
        }
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