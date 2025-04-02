// Lista de conteudo:
const CONTEUDO_PLANETAS = [
  {
    'id': 1,
    'tag': 'tagSaturno.png',
    'texto': 
    `Saturno é o segundo maior planeta do nosso sitema solar e carrega seu anel icônico feito de gelo e poeira.\n\nO gigante gasoso e tempestuoso foi o escolhido pela Luneta para representar o setor de Markenting e Comunicação para <span>empresas públicas ou projetos advindos de recursos públicos</span>, pois uma responsa dessas requer <span>disciplina , estrutura, responsabilidade e limites</span>, que é justamente o que o planeta representa\n\nApessar das tempestades terríveis, a visita foi agradável.`,
    'fundo': 'fundoSaturno'
  }
];

const modal = (numID = 0) => {

  // Seleciona o elemento:
  const container = document.getElementById('modal');

  // Modifica a visualização mundando a classe:
  container.style.display = (container.style.display === 'flex') ? 'none' : 'flex';

  let p;
  let p_txt;

  // Testa se foi selecionado um elemento valido:
  if (numID != 0)
  {
    // Percorre a lista de conteudo:
    CONTEUDO_PLANETAS.forEach(planeta =>
    {
      // Preenche o conteudo comforme o elemente que foi selecionado:
      if (planeta.id == numID)
      {
        //conteudo.style.backgroundImage = "url('"+ planeta.fundo +"')";

        container.innerHTML += `
          <div class="conteudo">
            <button onclick="modal()">X</button>
            <div class=" ${planeta.fundo}">
              <img src="./artes/${planeta.tag}" alt="Faixa escrito saturno" class="faixa">
            </div>
            <div class="white">
              <img src="./artes/${planeta.tag}" alt="Faixa escrito saturno" class="faixap">
              <p></p>
            </div>
          </div>
        `;

        // Seleciona a tag que recebera o texto:
        p = container.querySelector('p');
        p_txt = planeta.texto;

        let html = '';
        let j = 0
        function digitar1() {
          if (j < p_txt.length) {
            html += p_txt.charAt(j)
            p.innerHTML = html;
            j++;
            setTimeout(digitar1, 100); // Ajuste o tempo de digitação aqui (em milissegundos)
          }
        }
        digitar1();
      }
    });
  }

  else{
    container.innerHTML = '';
  }
};