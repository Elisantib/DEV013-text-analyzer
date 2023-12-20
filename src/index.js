import analyzer from "./analyzer.js";
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

/* --------------BOTON DE BORRADO--------------- */

document.getElementsByName("btn")[0].addEventListener("click", function () {
  borrarTexto();
});

function borrarTexto() {
  document.getElementsByName("user-input")[0].value = "";

  /* reiniciar palabras */
  document.getElementById("word").innerHTML = "";

  /* reiniciar caracteres */
  document.getElementById("characters").innerHTML = "";

  /* reiniciar caracteres sin espacio */
  document.getElementById("space").innerHTML = "";

  /* reiniciar numeros */
  document.getElementById("number").innerHTML = "";

  /* reiniciar suma de numeros */
  document.getElementById("sum").innerHTML = "";

  /* reiniciar longitud */
  document.getElementById("length").innerHTML = "";
}

//---------------------------------------------------------------------------------------

/* creo la constante "texto" para guardar el elemento de id "textarea"  */

const texto = document.querySelector("textarea");
/* console.log(texto); */

/* ------------------ CONTAR PALABRAS --------------------- */

const resultCountWord = document.getElementById("word");

texto.addEventListener("input", function () {
  resultCountWord.textContent = analyzer.getWordCount(texto.value);
});

/* ------------------ CONTAR CARACTERES --------------------- */

/* creo la constante "resultCountCharacters" para guardar el elemento de id "characters" */

const resultCountCharacters = document.getElementById("characters");

/* En el siguiente codigo le decimos a la const texto que escuche el evento input que se dispara cuando el contenido del elemento cambia y luego de eso ejecute la función */
/* En la función decimos que el resultado del contenido de la const resultCountCharacters debe ser el valor de la const texto que se encuentra en getCharacterCount  */

texto.addEventListener("input", function () {
  resultCountCharacters.textContent = analyzer.getCharacterCount(texto.value);
});

/*----------------------- CONTAR CARACTERES SIN ESPACIOS -----------------*/

const resultCharacterCountExcludingSpaces = document.getElementById("space");

texto.addEventListener("input", function () {
  resultCharacterCountExcludingSpaces.textContent =
    analyzer.getCharacterCountExcludingSpaces(texto.value);
});

/* -------------------- CONTAR NUMEROS ----------------------------- */

const resultNumerCount = document.getElementById("number");

texto.addEventListener("input", function () {
  resultNumerCount.textContent = analyzer.getNumberCount(texto.value);
});

/* -------------------- SUMAR NUMEROS ----------------------------- */

const resultNumberSum = document.getElementById("sum");

texto.addEventListener("input", function () {
  resultNumberSum.textContent = analyzer.getNumberSum(texto.value);
});
