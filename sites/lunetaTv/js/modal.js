// Lista de conteudo:
const CONTEUDO_PLANETAS = [
  {
    'id': 1,
    'titulo': 'Lorem ipsum dolor sit amet consectetur',
    'texto': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita non, maxime, cupiditate doloribus atque voluptates sint quisquam fugiat reprehenderit nulla aperiam quaerat magni perferendis iste cumque similique? Sequi, quisquam eveniet!'
  }
];

const modal = (numID = 0) => {

  // Seleciona o elemento:
  let container = document.getElementById('modal');

  // Modifica a visualização mundando a classe:
  container.style.display = (container.style.display === 'flex') ? 'none' : 'flex';

  let h2;
  let h2_txt;

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
        container.innerHTML += `
          <div class="conteudo">
              <button onclick="modal()">X</button>
              <h2></h2>
              <p></p>
          </div>
        `;

        // Seleciona a tag que recebera o titulo:
        let h2 = container.querySelector('h2');
        let h2_txt = planeta.titulo;

        // Seleciona a tag que recebera o texto:
        let p = container.querySelector('p');
        let p_txt = planeta.texto;

        // Cria o efeito de digitação dos conteudos:
        let i = 0;
        function digitar0() {
          if (i < h2_txt.length) {
            h2.textContent += h2_txt.charAt(i);
            i++;
            setTimeout(digitar0, 100); // Ajuste o tempo de digitação aqui (em milissegundos)
          }
        }
        digitar0();

        let j = 0
        function digitar1() {
          if (j < p_txt.length) {
            p.textContent += p_txt.charAt(j);
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