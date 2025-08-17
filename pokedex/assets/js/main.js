const backToTopBtn = document.getElementById("backtotop");
const pokemonList = document.getElementById("pokemons");
const loadMore = document.getElementById("loadmore");

const maxRecords = 151;
let offset = 0;
let limit = 15;

window.addEventListener("scroll", () => {
  backToTopBtn.classList.toggle("show", window.scrollY > 200);
});

function convertPokemonToHtml(pokemon) {
  return `
    <li class="card-base ${pokemon.type}">
      <i class="number">#${pokemon.number}</i>
      <div class="card">
        <span class="name">${pokemon.name}</span>
        <div class="details">
          <ol class="types">
            ${pokemon.types.map(type => `<li class="type ${type}">${type}</li>`).join('')}
          </ol>
          <img src="${pokemon.image}" alt="${pokemon.name}">
        </div>
      </div>
    </li>
  `;
}

function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then(pokemons => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToHtml).join('');
  });
}

loadPokemonItens(offset, limit);

loadMore.addEventListener('click', () => {
  offset += limit;

  const qtdRecord = offset + limit;

  if (qtdRecord >= maxRecords) {
    const newLimit = maxRecords - offset
    loadPokemonItens(offset, newLimit);

    loadMore.parentElement.removeChild(loadMore)
  } else {
    loadPokemonItens(offset, limit);  
  }

});
