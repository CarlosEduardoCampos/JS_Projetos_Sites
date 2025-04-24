const MOLD_CONTAINER = document.querySelector('.modelos_container');

    const MOLD_DATA = [
        {
            'func':'',
            'href':'./sites/homeEmpresa/index.html',
            'src':'./img/site.png',
            'alt':'link home page empresarial',
            'nome':'Empresa'
        },
        {
            'func':'',
            'href':'./sites/homeServicos/index.html',
            'src':'./img/site.png',
            'alt':'link home page contratar serviço',
            'nome':'Serviço'
        },
        {
            'func':'',
            'href':'./sites/homeAgencia/site.html',
            'src':'./img/site.png',
            'alt':'link home page social midia',
            'nome':'Agencia'
        },
        {
            'func':'',
            'href':'./sites/homeCafeteria/index.html',
            'src':'./img/site.png',
            'alt':'link home page social midia',
            'nome':'Cafeteria'
        },
    ]

    const listaMold = (dados, container) => {
        dados.forEach(dado => {
            container.innerHTML += `<a href="${dado.href}" class="item" ${dado.func}> <img src="${dado.src}" alt="${dado.alt}"> <p>${dado.nome}</p> </a>`
        });
    }

    listaMold(MOLD_DATA, MOLD_CONTAINER);