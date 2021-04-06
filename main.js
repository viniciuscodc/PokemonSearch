var submit = document.querySelector("#submit");

submit.addEventListener("click", function () {
  var userInput = document.getElementById("userInput").value.toLowerCase();
  const apiURL = "https://pokeapi.co/api/v2/pokemon/" + userInput;

  async function getData() {
    try {
      const response = await fetch(apiURL);
      var data = await response.json();
    } catch {
      console.log("error");
    }
    var getImage =
      data["sprites"]["other"]["official-artwork"]["front_default"];
    document.getElementById("pokemonSprite").src = getImage;

    function displayName() {
      let getName = data.name;
      let nameText = document.querySelector(".name");
      nameText.innerHTML = getName;
      nameText.style.setProperty("text-transform", "capitalize");
    }
    function displayNumber() {
      let getNumber = data.id;
      let numberText = document.querySelector(".number");
      numberText.innerHTML = "#" + getNumber;
    }

    displayNumber();
    displayName();
    document.querySelector(".container").style.opacity = 1;
    document.querySelector(".container2").style.opacity = 1;
  }

  getData();
});
