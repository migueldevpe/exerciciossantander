document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("pokemon-modal");
  const modalContent = modal.querySelector(".modal-content");
  const modalName = document.getElementById("modal-name");
  const modalNumber = document.getElementById("modal-number");
  const modalImage = document.getElementById("modal-image");
  const modalTypes = document.getElementById("modal-types");
  const modalClose = modal.querySelector(".close");

  function openModal(pokemon) {
    modalName.textContent = pokemon.name;
    modalNumber.textContent = `#${pokemon.number}`;
    modalImage.src = pokemon.image;
    modalImage.alt = pokemon.name;
    modalTypes.innerHTML = pokemon.types.map(t => `<span class="type ${t}">${t}</span>`).join('');

    const tempSpan = document.createElement("span");
    tempSpan.className = `type ${pokemon.types[0]}`;
    document.body.appendChild(tempSpan);
    const typeColor = getComputedStyle(tempSpan).backgroundColor;
    document.body.removeChild(tempSpan);

    modalContent.style.backgroundColor = typeColor;

    modal.classList.add("show");
  }

  modalClose.addEventListener("click", () => modal.classList.remove("show"));
  window.addEventListener("click", e => { if(e.target === modal) modal.classList.remove("show"); });

  // Delegação de evento
  document.body.addEventListener("click", e => {
    const card = e.target.closest(".card-base");
    if(!card) return;

    const pokemonData = {
      name: card.querySelector(".name").textContent,
      number: card.querySelector(".number").textContent.replace("#",""),
      image: card.querySelector("img").src,
      types: Array.from(card.querySelectorAll(".type")).map(t => t.textContent)
    };

    openModal(pokemonData);
  });
});
