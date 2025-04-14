const PAGE_CONTAINER = document.querySelector('.paginas_container');

    const PAGE_DATA = [
        {
            'func':'',
            'href':'./pages/cartao/index.html',
            'src':'./img/site.png',
            'alt':'Pagina de dados do cartão',
            'nome':'Cartão'
        }
    ]

    const listaPage = (dados, container) => {
        dados.forEach(dado => {
            container.innerHTML += `<a href="${dado.href}" class="item" ${dado.func}> <img src="${dado.src}" alt="${dado.alt}"> <p>${dado.nome}</p> </a>`
        });
    }

    listaPage(PAGE_DATA, PAGE_CONTAINER);
    
