const pokemonList = [
  { name: "Absol", image: "images/absol.png", functions: ["toplaner", "jungler"] },
  { name: "Aegislash", image: "images/aegislash.png", functions: ["toplaner"] },
  { name: "Azumarill", image: "images/azumarill.png", functions: ["toplaner"] },
  { name: "Blastoise", image: "images/blastoise.png", functions: ["toplaner", "tank"] },
  { name: "Blaziken", image: "images/blaziken.png", functions: ["toplaner", "jungler"] },
  { name: "Blissey", image: "images/blissey.png", functions: ["suporte", "tank"] },
  { name: "Buzzwole", image: "images/buzzwole.png", functions: ["toplaner"] },
  { name: "Chandelure", image: "images/chandelure.png", functions: ["carry", "jungler"] },
  { name: "Charizard", image: "images/charizard.png", functions: ["jungler"] },
  { name: "Cinderace", image: "images/cinderace.png", functions: ["jungler"] },
  { name: "Clefable", image: "images/clefable.png", functions: ["suporte", "tank"] },
  { name: "Comfey", image: "images/comfey.png", functions: ["suporte"] },
  { name: "Cramorant", image: "images/cramorant.png", functions: ["carry"] },
  { name: "Crustle", image: "images/crustle.png", functions: ["tank", "toplaner"] },
  { name: "Decidueye", image: "images/decidueye.png", functions: ["carry", "jungler"] },
  { name: "Delphox", image: "images/delphox.png", functions: ["jungler"] },
  { name: "Dodrio", image: "images/dodrio.png", functions: ["toplaner", "jungler"] },
  { name: "Dragonite", image: "images/dragonite.png", functions: ["jungler"] },
  { name: "Duraludon", image: "images/duraludon.png", functions: ["jungler", "carry"] },
  { name: "Eldegoss", image: "images/eldegoss.png", functions: ["suporte"] },
  { name: "Espeon", image: "images/espeon.png", functions: ["carry"] },
  { name: "Garchomp", image: "images/garchomp.png", functions: ["toplaner"] },
  { name: "Gardevoir", image: "images/gardevoir.png", functions: ["jungler", "carry"] },
  { name: "Gengar", image: "images/gengar.png", functions: ["jungler"] },
  { name: "Glaceon", image: "images/glaceon.png", functions: ["jungler", "carry"] },
  { name: "Goodra", image: "images/goodra.png", functions: ["toplaner"] },
  { name: "Greedent", image: "images/greedent.png", functions: ["toplaner"] },
  { name: "Greninja", image: "images/greninja.png", functions: ["toplaner", "jungle"] },
  { name: "Hoopa", image: "images/hoopa.png", functions: ["suporte"] },
  { name: "Inteleon", image: "images/inteleon.png", functions: ["jungler", "carry"] },
  { name: "Lapras", image: "images/lapras.png", functions: ["toplaner", "tank"] },
  { name: "Leafeon", image: "images/leafeon.png", functions: ["toplaner", "jungler"] },
  { name: "Lucario", image: "images/lucario.png", functions: ["toplaner"] },
  { name: "Machamp", image: "images/machamp.png", functions: ["toplaner"] },
  { name: "Mamoswine", image: "images/mamoswine.png", functions: ["tank"] },
  { name: "Mew", image: "images/mew.png", functions: ["carry"] },
  { name: "MewtwoX", image: "images/mewtwox.png", functions: ["toplaner", "jungler"] },
  { name: "MewtwoY", image: "images/mewtwoy.png", functions: ["jungler"] },
  { name: "Mimikyu", image: "images/mimikyu.png", functions: ["toplaner", "jungler"] },
  { name: "Mr. Mime", image: "images/mr-mime.png", functions: ["tank"] },
  { name: "Ninetales", image: "images/ninetales.png", functions: ["carry"] },
  { name: "Pikachu", image: "images/pikachu.png", functions: ["carry"] },
  { name: "Sableye", image: "images/sableye.png", functions: ["suporte"] },
  { name: "Scizor", image: "images/scizor.png", functions: ["toplaner"] },
  { name: "Scyther", image: "images/scyther.png", functions: ["toplaner", "jungler"] },
  { name: "Slowbro", image: "images/slowbro.png", functions: ["tank"] },
  { name: "Snorlax", image: "images/snorlax.png", functions: ["tank"] },
  { name: "Sylveon", image: "images/sylveon.png", functions: ["toplaner", "carry"] },
  { name: "Talonflame", image: "images/talonflame.png", functions: ["toplaner", "jungler"] },
  { name: "Trevenant", image: "images/trevenant.png", functions: ["tank"] },
  { name: "Tsareena", image: "images/tsareena.png", functions: ["toplaner"] },
  { name: "Tyranitar", image: "images/tyranitar.png", functions: ["jungler", "toplaner", "carry"] },
  { name: "Umbreon", image: "images/umbreon.png", functions: ["tank"] },
  { name: "Urshifu Água", image: "images/urshifua.png", functions: ["jungler"] },
  { name: "Urshifu Dark", image: "images/urshifud.png", functions: ["jungler"] },
  { name: "Venusaur", image: "images/venusaur.png", functions: ["jungler", "carry"] },
  { name: "Wigglytuff", image: "images/wigglytuff.png", functions: ["tank"] },
  { name: "Zacian", image: "images/zacian.png", functions: ["toplaner", "jungler"] },
  { name: "Zeraora", image: "images/zeraora.png", functions: ["jungler"] },
  { name: "Zoroark", image: "images/zoroark.png", functions: ["jungler", "toplaner"] }
];

document.getElementById("randomize-button").addEventListener("click", randomButtonClick);

function randomButtonClick() {
  const positions = ["toplaner", "suporte", "jungler", "carry", "tank"];
  const players = ["Player1", "Player2", "Player3", "Player4", "Player5"];
  const availablePokemon = [...pokemonList]; 
  players.forEach(player => {
    if (positions.length > 0) {
      const positionIndex = Math.floor(Math.random() * positions.length);
      const randomPosition = positions[positionIndex];
      positions.splice(positionIndex, 1);

      const filteredPokemon = availablePokemon.filter(pokemon => pokemon.functions.includes(randomPosition));

      if (filteredPokemon.length > 0) {
        const randomPokemonIndex = Math.floor(Math.random() * filteredPokemon.length);
        const randomPokemon = filteredPokemon[randomPokemonIndex];
      
        document.getElementById("player-" + player).innerText = player + " - " + randomPosition;
        document.getElementById("pokemon-" + player).innerText = randomPokemon.name;
        document.getElementById("pokemon-image-" + player).src = randomPokemon.image;

        availablePokemon.splice(availablePokemon.indexOf(randomPokemon), 1); 
      }
    }
  });
}

document.getElementById("toplaner-button").addEventListener("click", toplanerButtonClick);
document.getElementById("suporte-button").addEventListener("click", suporteButtonClick);
document.getElementById("jungler-button").addEventListener("click", junglerButtonClick);
document.getElementById("carry-button").addEventListener("click", carryButtonClick);
document.getElementById("tank-button").addEventListener("click", tankButtonClick);
document.getElementById("random-button").addEventListener("click", pokemonButtonClick);

function getRandomPokemon() {
  const randomIndex = Math.floor(Math.random() * pokemonList.length);
  return pokemonList[randomIndex];
}

function toplanerButtonClick() {
  const filteredPokemon = pokemonList.filter(pokemon => pokemon.functions.includes("toplaner"));
  if (filteredPokemon.length > 0) {
    const randomIndex = Math.floor(Math.random() * filteredPokemon.length);
    displayPokemon(filteredPokemon[randomIndex]);
  }
}

function suporteButtonClick() {
  const filteredPokemon = pokemonList.filter(pokemon => pokemon.functions.includes("suporte"));
  if (filteredPokemon.length > 0) {
    const randomIndex = Math.floor(Math.random() * filteredPokemon.length);
    displayPokemon(filteredPokemon[randomIndex]);
  }
}

function junglerButtonClick() {
  const filteredPokemon = pokemonList.filter(pokemon => pokemon.functions.includes("jungler"));
  if (filteredPokemon.length > 0) {
    const randomIndex = Math.floor(Math.random() * filteredPokemon.length);
    displayPokemon(filteredPokemon[randomIndex]);
  }
}

function carryButtonClick() {
  const filteredPokemon = pokemonList.filter(pokemon => pokemon.functions.includes("carry"));
  if (filteredPokemon.length > 0) {
    const randomIndex = Math.floor(Math.random() * filteredPokemon.length);
    displayPokemon(filteredPokemon[randomIndex]);
  }
}

function tankButtonClick() {
  const filteredPokemon = pokemonList.filter(pokemon => pokemon.functions.includes("tank"));
  if (filteredPokemon.length > 0) {
    const randomIndex = Math.floor(Math.random() * filteredPokemon.length);
    displayPokemon(filteredPokemon[randomIndex]);
  }
}

function pokemonButtonClick() {
  const randomPokemon = getRandomPokemon();
  displayPokemon(randomPokemon);
}

function displayPokemon(pokemon) {
  document.getElementById("pokemon-name").innerText = pokemon.name;
  document.getElementById("pokemon-image").src = pokemon.image;
}

function sortearNomes() {
  const form = document.getElementById('namesForm');
  const checkboxes = form.querySelectorAll('input[type="checkbox"]:checked');
  const nomesSorteados = document.getElementById('nomesSorteados');
  nomesSorteados.innerHTML = '';

  // Copiar os nomes selecionados para um array
  const nomesSelecionados = [];
  checkboxes.forEach((checkbox) => {
    nomesSelecionados.push(checkbox.value);
  });

  // Embaralhar os nomes selecionados
  for (let i = nomesSelecionados.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [nomesSelecionados[i], nomesSelecionados[j]] = [nomesSelecionados[j], nomesSelecionados[i]];
  }

  // Exibir os 5 nomes sorteados
  for (let i = 0; i < 5; i++) {
    const li = document.createElement('li');
    li.textContent = nomesSelecionados[i];
    nomesSorteados.appendChild(li);
  }
}
