var serverURL = "https://api.funtranslations.com/translate/shakespeare.json";
var translate = document.querySelector(".button-translate");
var input = document.querySelector("#input");
var output = document.querySelector("#output");

function constructURL(text) {
  return serverURL + "?text=" + text;
}

translate.addEventListener("click", () => {
  var inputText = input.value;
  fetch(constructURL(inputText))
    .then((res) => res.json())
    .then((json) => {
      output.innerText = json.contents.translated;
    });
});
