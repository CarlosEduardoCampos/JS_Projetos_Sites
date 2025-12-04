const imoveis = [
    {
        nome: "Escarpas Styles",
        local: "Capitólio-MG",
        link: "https://hbook.hsystem.com.br/booking?companyId=66f5a892ff1b8051288261de&promocode=Carlos13&utm_source=website&utm_medium=search-box&utm_campaign=website",
        img: "img/ht001.jpg"
    },
    {
        nome: "Escarpas Resort",
        local: "Capitólio-MG",
        link: "https://hbook.hsystem.com.br/Booking?companyId=64d51e35362715cdb695a7fd&adults=1&promocode=Carlos10",
        img: "img/ht002.jpg"
    },
    {
        nome: "Rancho Rodrigues",
        local: "Capitólio-MG(Rural)",
        link: "",
        img: "img/exemplo3.jpg"
    },
];

function carregarImoveis(lista) {
    const container = document.getElementById("listaImoveis");
    container.innerHTML = "";

    lista.forEach(i => {
        container.innerHTML += `
            <div class="card">
		<a href="${i.link}">
                    <img src="${i.img}">
                    <div class="card-info">
                    	<h3>${i.nome}</h3>
                    	<p>${i.local}</p>
                    </div>
		</a>
            </div>
        `;
    });
}

carregarImoveis(imoveis);

function buscar() {
    const termo = document.getElementById("searchInput").value.toLowerCase();
    const filtrados = imoveis.filter(i =>
        i.nome.toLowerCase().includes(termo) ||
        i.local.toLowerCase().includes(termo)
    );

    carregarImoveis(filtrados);
}
