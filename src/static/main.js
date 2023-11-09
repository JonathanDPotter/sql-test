const getCharacters = async () => {
  const main = document.getElementsByTagName("main")[0];
  main.innerHTML = "";
  try {
    const response = await fetch("/api/characters");
    const json = await response.json();
    console.log(json);
    json.forEach((character) =>
      main.appendChild(
        Object.assign(document.createElement("p"), {
          textContent: character.Name,
        })
      )
    );
  } catch (error) {
    console.log(error);
  }
};

getCharacters();
