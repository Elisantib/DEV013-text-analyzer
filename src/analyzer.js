const analyzer = {
  getWordCount: (text) => {
    const word = text;
    const arrayWord = word.split(/\s+/);

    return arrayWord.length;

    //transformar a text en un array con split
    //solo contabilizar las palabras con una expresion regular
    //retornar resultado
  },

  getCharacterCount: (text) => {
    const caracter = text;
    const arrayCharacter = caracter.split("");

    return arrayCharacter.length;

    //Transformar text a un array
    //contar el largo del array resultante con length
  },
  getCharacterCountExcludingSpaces: (text) => {
    const onlyCharacter = text;
    const excluyendoEspacios = onlyCharacter
      .replace(/[^\w\s]|_/g, "")
      .replace(/\s+/g, "");
    const arraySpace = excluyendoEspacios.split("");

    return arraySpace.length;

    //---------------------------

    /* return text.replace(/\s+/g, "").length; */

    //----------------------------

    //guardar text en una constante
    //de esa constante extraer solo los caracteres con una expresion regular
    //luego transformar a un array
    //retornar

    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {
    const wordLength = text;
    const words = wordLength.split(/\s+/);
    const totalWordLength = words.reduce((acc, word) => acc + word.length, 0);
    const averageWordLength = totalWordLength / words.length;
    return averageWordLength;

    /* const wordLength = text;
    const onlyWord2 = wordLength.split(/\s+/).length;
    const onlyCharacter2 = wordLength.split("").length;

    return onlyCharacter2 / onlyWord2; */

    //Guardar text en una constante para utilizarla
    //seleccionar solo las palabras del texto
    //Seleccionar solo los caracteres del texto
    //dividir las dos anteriores para obtener la longitud promedio
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    const number = text;
    const numbersArray = number.split(" ");

    const onlyNumber = numbersArray
      .filter((valor) => /^\d+$/.test(String(valor)))
      .map(Number);

    console.log(onlyNumber);
    return onlyNumber.length;

    /* const number = text;
    const onlyNumber = number.replace(/[^0-9]+/g, "");
    const arrayNumber = onlyNumber.split("");

    return arrayNumber.length; */

    //guardar text en una constante
    //solo seleccionar los numeros del texto
    //convertir los numeros en un array y luego con sumar cuantos numeros habían en mi array
    //El replace es reemplaza todos los caracteres que no son dígitos (0-9) con una cadena vacía ("").
  },
  getNumberSum: (text) => {
    const numberSum = text;
    const numbersSumArray = numberSum.match(/\b\d+(\.\d+)?\b/g);

    if (!numbersSumArray) {
      return 0;
    }

    const onlyNumberSum = numbersSumArray.map(Number);

    const suma = onlyNumberSum.reduce(
      (acumulador, numero) => acumulador + numero,
      0
    );

    return suma;

    //---------------------------------------------

    /* const numberSum = text;
    const numbersSumArray = numberSum.split(" ");

    const onlyNumberSum = numbersSumArray
      .filter((valor) => /^\d+$/.test(String(valor)))
      .map(Number);

    const suma = onlyNumberSum.reduce(
      (acumulador, numero) => acumulador + numero,
      0
    );

    console.log(suma);
    return suma; */

    //----------------------------------------------

    /* const numberSum = text;
    const arraySumNumber = numberSum.split("");

    let contador = 0;

    const soloEnteros = [];

    for (let i = 0; i < arraySumNumber.length; i++) {
      const num = parseInt(arraySumNumber[i]);
      if (!isNaN(num)) {
        soloEnteros.push(num);
      }
    }

    for (let i = 0; i < soloEnteros.length; i++) {
      contador = contador + soloEnteros[i];
    }

    return contador; */

    //--------------------------

    //convertir texto en un array
    //con for recorrer el array
    //solo reconocer los numeros
    //almacenar los numeros en una const
    //sumar los numeros guardados
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
