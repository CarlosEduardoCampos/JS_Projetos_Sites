//const body = document.getElementsByTagName("body")[0];
const body = document.querySelector("body");

function copiarPix(){

    const pix = document.getElementById("chavePix").innerText;

    navigator.clipboard.writeText(pix);

    alert("Chave PIX copiada!");
}

function fecharPopup()
{
    document.querySelector(".popup-overlay").remove();
};

function abrirPopup()
{
    body.innerHTML += `
    <div class="popup-overlay">
        <div class="popup">
            <button id="fecharPopup" onclick="fecharPopup()"> X </button>

            <h2>Lista de Presentes</h2>
            <p>Obrigado por fazer parte do nosso sonho! </p>

            <div class="gift-card" style="cursor:pointer;" onclick="copiarPix()">
                <i class="fa-solid fa-qrcode" style="color:#32BCAD; font-size:40px;"></i>

                <h2 id="chavePix">
                    caducamrodrigues@gmail.com
                </h2>
            </div>

            <a href="https://link.mercadopago.com.br/caduwebsite">
                <div class="gift-card" style="cursor:pointer;">
                    <i class="fa-regular fa-credit-card" style="color: #32BCAD;"></i>
                    <h3>CARTÃO</h3>
                </div>
            </a>
        </div>
    </div>`;
};
