const pokemonName = "lucario";
var apiURL = "https://pokeapi.co/api/v2/pokemon/" + pokemonName;

async function getData() {
  const response = await fetch(apiURL);
  const data = await response.json();

  var getImage = data["sprites"]["other"]["official-artwork"]["front_default"];
  document.getElementById("pokemon").src = getImage;
}
getData();
