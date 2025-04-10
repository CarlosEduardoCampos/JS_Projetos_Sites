const MOLD_CONTAINER = document.querySelector('.modelos_container');

    const MOLD_DATA = [
        {
            'func':'',
            'href':'./sites/homeEmpresarial/index.html',
            'src':'./img/site.png',
            'alt':'link home page empresarial',
            'nome':'Empresarial'
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
            'href':'./sites/homeMidia/index.html',
            'src':'./img/site.png',
            'alt':'link home page social midia',
            'nome':'Social'
        }
    ]

    const listaMold = (dados, container) => {
        dados.forEach(dado => {
            container.innerHTML += `<a href="${dado.href}" class="item" ${dado.func}> <img src="${dado.src}" alt="${dado.alt}"> <p>${dado.nome}</p> </a>`
        });
    }

    listaMold(MOLD_DATA, MOLD_CONTAINER);