import analyzer from "./analyzer.js";
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

/* --------------BOTON DE BORRADO--------------- */

document.getElementById("reset-button").addEventListener("click", function () {
  borrarTexto();
});

function borrarTexto() {
  // Borra el contenido del campo de entrada del Textarea con name "user-input"
  document.getElementsByName("user-input")[0].value = "";

  const listWord = document.querySelectorAll("li")[0];
  listWord.textContent = "Palabras: 0";

  const listCharacters = document.querySelectorAll("li")[1];
  listCharacters.textContent = "Caracteres: 0";

  const listCharacterCountExcludingSpaces = document.querySelectorAll("li")[2];
  listCharacterCountExcludingSpaces.textContent = "Caracteres sin espacios: 0";

  const listNumber = document.querySelectorAll("li")[3];
  listNumber.textContent = "Números: 0";

  const listNumberSum = document.querySelectorAll("li")[4];
  listNumberSum.textContent = "Suma números: 0";

  const listAverageWordLength = document.querySelectorAll("li")[5];
  listAverageWordLength.textContent = "Longitud promedio: 0";
}

/* -------------------------- CONSTANTE QUE ALMACENA TEXTAREA -------------------------- */

/* creo la constante "texto" para guardar el elemento de id "textarea"  */

const texto = document.querySelector("textarea");
/* console.log(texto); */

/* ------------------ CONTAR PALABRAS --------------------- */

const resultCountWord = document.querySelectorAll("li")[0];

texto.addEventListener("input", function () {
  const wordCount = analyzer.getWordCount(texto.value);
  resultCountWord.textContent = "Palabras: " + wordCount;
});

/* const resultCountWord = document.getElementById("word");


/* ------------------ CONTAR CARACTERES --------------------- */

const resultCountCharacters = document.querySelectorAll("li")[1];

/* const resultCountCharacters = document.getElementById("characters"); */

texto.addEventListener("input", function () {
  const countCharacters = analyzer.getCharacterCount(texto.value);
  resultCountCharacters.textContent = "Caracteres: " + countCharacters;
  /* resultCountCharacters.textContent = analyzer.getCharacterCount(texto.value); */
});

/*----------------------- CONTAR CARACTERES SIN ESPACIOS -----------------*/

const resultCharacterCountExcludingSpaces = document.querySelectorAll("li")[2];

/* const resultCharacterCountExcludingSpaces = document.getElementById("space"); */

texto.addEventListener("input", function () {
  const characterCountExcludingSpaces =
    analyzer.getCharacterCountExcludingSpaces(texto.value);
  resultCharacterCountExcludingSpaces.textContent =
    "Caracteres sin espacios: " + characterCountExcludingSpaces;

  /* resultCharacterCountExcludingSpaces.textContent =
    analyzer.getCharacterCountExcludingSpaces(texto.value); */
});

/* -------------------- CONTAR NUMEROS ----------------------------- */

const resultNumerCount = document.querySelectorAll("li")[3];

/* const resultNumerCount = document.getElementById("number"); */

texto.addEventListener("input", function () {
  const numberCount = analyzer.getNumberCount(texto.value);
  resultNumerCount.textContent = "Números: " + numberCount;

  /* resultNumerCount.textContent = analyzer.getNumberCount(texto.value); */
});

/* -------------------- SUMAR NUMEROS ----------------------------- */

const resultNumberSum = document.querySelectorAll("li")[4];

/* const resultNumberSum = document.getElementById("sum"); */

texto.addEventListener("input", function () {
  const numberSum = analyzer.getNumberSum(texto.value);
  resultNumberSum.textContent = "Suma números: " + numberSum;

  /* resultNumberSum.textContent = analyzer.getNumberSum(texto.value); */
});

/* -------------------- LONGITUD PROMEDIO -------------------------*/

const resultAverageWordLength = document.querySelectorAll("li")[5];

/* const resultAverageWordLength = document.getElementById("length"); */

texto.addEventListener("input", function () {
  const averageWordLength = analyzer.getAverageWordLength(texto.value);
  resultAverageWordLength.textContent =
    "Longitud promedio: " + averageWordLength;

  /* resultAverageWordLength.textContent = analyzer.getAverageWordLength(
    texto.value
  ); */
});
