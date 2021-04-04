let submit = document.querySelector(".search");

submit.addEventListener("click", function () {
  var pokemonName = document.getElementById("pokemonName").value;

  //const pokemonName = "lucario";
  var apiURL = "https://pokeapi.co/api/v2/pokemon/" + pokemonName;

  async function getData() {
    try {
      const response = await fetch(apiURL);
      const data = await response.json();
      var getImage = data["sprites"]["other"]["official-artwork"]["front_default"];
      document.getElementById("pokemon").src = getImage;
    } catch {
      console.log("error");
    }
  }
  getData();
});
