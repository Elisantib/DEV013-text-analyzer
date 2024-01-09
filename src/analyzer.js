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

    const wordLength = text; //guardo en una constante el texto pasado como parametro
    const words = wordLength.split(/\s+/); //Se utiliza el método split para dividir el texto en un array de palabras con la E.R. /\s+/ que se utiliza para dividir el texto en base a uno o más espacios en blanco

    const totalWordLength = words.reduce((acc, word) => acc + word.length, 0); //Se utiliza el método reduce para sumar las longitudes de todas las palabras. la función de reducción toma dos parámetros: acc (acumulador) y word (la palabra actual del array). La función suma la longitud de la palabra (word.length) al acumulador (acc). "0" Es el valor inicial del acumulador. En este caso, se comienza con un acumulador de valor cero.

    const averageWordLength = totalWordLength / words.length; //Se calcula la longitud promedio dividiendo la suma total por el número de palabras

    return parseFloat(averageWordLength.toFixed(2)); //Se utiliza parseFloat y toFixed para redondear el resultado a dos decimales y convertirlo a un número de punto flotante
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
