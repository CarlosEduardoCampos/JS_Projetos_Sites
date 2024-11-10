const CONTEUDO_PLANETAS = [
  {
    'id': 1,
    'titulo': 'Lorem ipsum dolor sit amet consectetur',
    'texto': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita non, maxime, cupiditate doloribus atque voluptates sint quisquam fugiat reprehenderit nulla aperiam quaerat magni perferendis iste cumque similique? Sequi, quisquam eveniet!'
  }
];

const modal = (numID = 0) => {
  let container = document.getElementById('modal');
  container.style.display = (container.style.display === 'flex') ? 'none' : 'flex';

  if (numID != 0)
  {
    CONTEUDO_PLANETAS.forEach(planeta =>
    {
      if (planeta.id == numID)
      {
        container.innerHTML += `
          <div class="conteudo">
              <button onclick="modal()">X</button>
              <h2>${planeta.titulo}</h2>
              <p>${planeta.texto}</p>
          </div>
        `;
      }
    });  
  }
  else{
    container.innerHTML = '';
  }
};