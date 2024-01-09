const analyzer = {
  getWordCount: (text) => {
    const word = text; //guardo en una constante el texto pasado como parametro
    const arrayWord = word.split(/\s+/); // Con split divido el texto según la expresion regular que le entregué. Lo convierte en un array... La expresión regular "/\s+/" : significa "encuentra una o más ocurrencias de cualquier carácter de espacio en blanco"

    return arrayWord.length; // se devuelve la longitud del array, que representa el número de palabras en el texto
  },

  getCharacterCount: (text) => {
    const caracter = text; //guardo en una constante el texto pasado como parametro
    const arrayCharacter = caracter.split(""); //Se utiliza split para dividir el texto en un array de caracteres

    return arrayCharacter.length; //Se devuelve la longitud del array
  },
  getCharacterCountExcludingSpaces: (text) => {
    const onlyCharacter = text; //guardo en una constante el texto pasado como parametro
    const excluyendoEspacios = onlyCharacter
      .replace(/[^\w\s]|_/g, "")
      .replace(/\s+/g, ""); // Se utiliza replace para eliminar caracteres no alfanuméricos y guiones bajos
    //La expresión regular [^\w\s]|_ busca cualquier carácter que no sea una letra, número o espacio en blanco, o un guion bajo, y lo reemplaza con una cadena vacía.
    //Después de eliminar caracteres no deseados, se utiliza nuevamente replace con la E.R. /\s+/g para eliminar los espacios en blanco restantes

    const arraySpace = excluyendoEspacios.split(""); //Se utiliza split para dividir la cadena resultante en un array de caracteres

    return arraySpace.length; //Se devuelve la longitud del array
  },
  getAverageWordLength: (text) => {
    //función que tengo que cambiar en rama-eli

    const text1 = text;
    const characterLength = text1.length;

    const wordLength = text1.split(" ").length;

    let modifiedText = "";

    //en el siguiente ciclo estoy obteniendo solo los caracteres de la "a" a la "z"
    for (let i = 0; i < characterLength; i++) {
      const character = text1[i];

      if (
        (character >= "a" && character <= "z") ||
        (character >= "A" && character <= "Z")
      ) {
        modifiedText += character;
      }
    }

    //en el siguiente ciclo estoy guardando en un array la cadena anterior
    const arrayCharacter2 = [];

    for (let i = 0; i < characterLength; i++) {
      arrayCharacter2[i] = modifiedText[i];
    }

    //en el siguiente ciclo estoy eliminando de mi array los undefined

    const newArray = [];

    for (let i = 0; i < characterLength; i++) {
      const removeUndefined = arrayCharacter2[i];
      if (removeUndefined !== undefined) {
        newArray.push(removeUndefined);
      }
    }

    const result = parseFloat((newArray.length / wordLength).toFixed(2));

    return result;

    /*  */

    //obtener la cantidad de palabras
    //obtener la cantidad de caracteres excluyendo espacios y signos de puntuacion
    //dividar la cant de caracteres por la cantidad de palabras
    //retornar el resultado con dos decimales
  },
  getNumberCount: (text) => {
    const number = text; //guardo en una constante el texto pasado como parametro
    const onlyNumber = number.match(/\b\d+(\.\d+)?\b/g); //Se utiliza match con una E.R. para encontrar números en el texto. La E.R. \b\d+(\.\d+)?\b coincide con números enteros o decimales

    return onlyNumber ? onlyNumber.length : 0; // Si onlyNumber tiene un valor (es decir, se encontraron números en el texto), devuelve la cantidad de números encontrados. Si onlyNumber es null (no se encontraron números), devuelve cero
  },
  getNumberSum: (text) => {
    const numberSum = text; //guardo en una constante el texto pasado como parametro
    const numbersSumArray = numberSum.match(/\b\d+(\.\d+)?\b/g); //Se utiliza una expresión regular para encontrar números en 'numberSum' y almacena los resultados en 'numbersSumArray'.

    if (!numbersSumArray) {
      //Verifica si 'numbersSumArray' es null o undefined. Si es así, retorna 0.
      return 0;
    }

    let suma = 0; //Inicializa una variable 'suma' para acumular la suma de los números encontrados.

    // Inicia un bucle 'for' que recorre cada elemento en 'numbersSumArray'
    for (let i = 0; i < numbersSumArray.length; i++) {
      //Obtiene la cadena de número en la posición 'i' del array y la almacena en 'numStr'.
      const numStr = numbersSumArray[i];
      //Convierte la cadena 'numStr' a un número de punto flotante y almacena el resultado en 'num'.
      const num = parseFloat(numStr);

      //Verifica si 'num' es un número válido. Si es así, suma 'num' a 'suma'.
      if (!isNaN(num)) {
        suma += num;
      }
    }

    return suma; //Retorna la suma acumulada de los números encontrados en 'text'.
  },
};

export default analyzer;
