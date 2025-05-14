// Lista de conteudo:
const CONTEUDO_PLANETAS = [
  {
    'id': 1,
    'tag': 'tagSaturno.png',
    'texto': 
    `\n\nSaturno é o segundo maior planeta do nosso sistema solar e carrega seu anel icônico feito de gelo e poeira.\n\nO gigante gasoso e tempestuoso foi o escolhido pela Luneta para representar o setor de Markenting e Comunicação para <span class="green">empresas públicas ou projetos advindos de recursos públicos</span>, pois uma responsa dessas requer <span class="blue">disciplina , estrutura, responsabilidade e limites</span>, que é justamente o que o planeta representa.\n\nApessar das tempestades terríveis, a visita foi agradável.`,
    'fundo': 'fundoSaturno'
  },
  {
    'id': 2,
    'tag': 'tagMarte.png',
    'texto': 
    `\n\nNosso vizinho Marte representa <span class="blue">desejo, coragem, ação, ímpeto, força e poder</span> e foi o escolhido para guiar os nossos <span class="green">clientes da Política</span>.\n\nMarte é o deus romano da guerra e, vai por mim, precisamos dessa energia pra enfrentar as infinitas batalhas em campanhas políticas.\n\nE não é à toa que ele é vermelho, não! Assim como todos os nossos clientes, estes, em especial, são progressistas eentram no jogo político com objetivos de equidade e justiça socioambiental.`,
    'fundo': 'fundoMarte'
  },
  {
    'id': 3,
    'tag': 'tagLua.png',
    'texto': 
    `\nSabia que o nome da nossa lua é Selene? A deusa grega em sua carruagem prateada, velando nosso planetinha azul todas as noites, o que deu a ela o arquétipo de uma grande mãe. Selene representa <span class="blue">renovação, mistério, sonhos, desejos e amor eterno</span> e foi em homenagem a ela que a Luneta nasceu com sonhos sociais e coletivos pra lá de ambiciosos.\n\n<span class="green">Somos uma agência cooperativista baseada em Economia Solidária</span>. Todo lucro é dividido equitativamente e todos os profissionais podem se ver em seus trabalhos e participam dele do começo ao fim.  Nosso jornal independente e profissional, a Luneta TV, foca em dar voz aos mais silenciados e promover o <span class="green">Jornalismo ativista em prol de um mundo mais justo</span>.`,
    'fundo': 'fundoLua'
  },
];

const modal = (numID = 0) => {

  // Seleciona o elemento:
  const container = document.getElementById('modal');

  // Modifica a visualização mundando a classe:
  container.style.display = (container.style.display === 'flex') ? 'none' : 'flex';

  // Escondendo logo flutuante
  let scrollText = document.getElementById('logo_menu');
  scrollText.classList.remove('visible');
  scrollText.classList.add('close');

  // Travando rolagem da pagina
  let body = document.querySelector('body');
  body.classList.add('stopBody');

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
            <div class=" ${planeta.fundo}">
              <img src="./artes/${planeta.tag}" alt="Faixa escrito saturno" class="faixa">
              <div class="white ${planeta.fundo}2">
                <img src="./artes/${planeta.tag}" alt="Faixa escrito saturno" class="faixap">
                <p></p>
              </div>
            </div>
            <button class="btn" onclick="modal()">X</button>
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
            setTimeout(digitar1, 5); // Ajuste o tempo de digitação aqui (em milissegundos)
          }
        }

        // Chama a função após 3s
        let intervalId = setInterval(function() {
          digitar1();
        }, 3500);
        
      }
    });
  }

  else{
    container.innerHTML = '';
    // Travando rolagem da pagina
    let body = document.querySelector('body');
    body.classList.remove('stopBody');
  }
};