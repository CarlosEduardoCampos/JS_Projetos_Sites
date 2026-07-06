const GIFT_CONTAINER = document.querySelector(".gift-grid");

const GIFT_DATA = [
    {
        icon: "fa-solid fa-plane",
        nome: "Lua de Mel",
        valor: "R$ 250,00"
    },
    {
        icon: "fa-solid fa-utensils",
        nome: "Jantar Romântico",
        valor: "R$ 180,00"
    },
    {
        icon: "fa-solid fa-couch",
        nome: "Mobília",
        valor: "R$ 450,00"
    },
    {
        icon: "fa-solid fa-house",
        nome: "Reforma",
        valor: "R$ 500,00"
    },
    {
        icon: "fa-solid fa-suitcase",
        nome: "Viagem",
        valor: "R$ 300,00"
    },
    {
        icon: "fa-solid fa-kitchen-set",
        nome: "Cozinha",
        valor: "R$ 220,00"
    },
    {
        icon: "fa-solid fa-heart",
        nome: "Decoração",
        valor: "R$ ???,??"
    }
];

const listaPresentes = (dados, container) => {
    container.innerHTML = "";

    dados.forEach(dado => {
        container.innerHTML += `
            <div class="gift-card">
                <i class="${dado.icon}"></i>
                <h3>${dado.nome}</h3>
                <p>${dado.valor}</p>
                <button>Presentear</button>
            </div>
        `;
    });
};

listaPresentes(GIFT_DATA, GIFT_CONTAINER);