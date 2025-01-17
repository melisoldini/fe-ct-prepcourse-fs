/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   
   var acumulador = []
   for(var key in objeto) {
      var arregloNuevo = [];
      arregloNuevo.push(key);
      arregloNuevo.push(objeto[key]);
      acumulador.push(arregloNuevo);
   }
   return acumulador;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   var acumulador = {}
   var fixedString = string.split('').sort(function(a,b) {
      if(a>b) return 1;
      if(a<b) return -1;
      return 0;
   }).join("")
   for(var i = 0; i < string.length; i++) {
      var str = string[i]
      if(acumulador[str] === undefined) {
         acumulador[str] = 1;
      } else {
         acumulador[str] += 1;
      }
   }
   return acumulador
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var minus = '';
   var mayus = '';
   for (var i = 0; i < string.length; i++) {
      if(string[i] === string[i].toUpperCase()){
         mayus += string[i];
      } else {
         minus += string[i];
      }
   }
   return mayus + minus
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var arregloDeFrase = frase.split(' ')
   var acumulador = []
   for(var i = 0; i < arregloDeFrase.length; i++) {
      var acumuladorFrase = '';
      for(var j = arregloDeFrase[i].length - 1; j >= 0; j--) {
         acumuladorFrase += arregloDeFrase[i][j];
      }
      acumulador.push(acumuladorFrase)
   }
   return acumulador.join(' ')
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numeroNuevo = '';
   numeroNuevo = numero.toString();
   var numeroAlReves = ''
   for(var i = numeroNuevo.length - 1; i >= 0; i--){
      numeroAlReves += numeroNuevo[i]
   }
   if(numeroNuevo === numeroAlReves) {
      return "Es capicua";
   } else {
      return "No es capicua";
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var newString = '';
   for(var i = 0; i < string.length; i++) {
      if(string[i] !== 'a' && string[i] !== 'b' && string[i] !== 'c')
         newString += string[i];
   }
   return newString;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   arrayOfStrings = arrayOfStrings.sort((a, b) => a.length - b.length)
   return arrayOfStrings;

   //var acumulador = []
   //for(var i = 0; i < arrayOfStrings.length - 1; i++) {
   //   for(var j = 0; j < arrayOfStrings[i].length; j++) {
   //      if(arrayOfStrings[j].length < arrayOfStrings[j].length) {
   //         acumulador.push(arrayOfStrings[j])
  //       }
 //     }
 //  } return acumulador

   //comparar el length de cada string
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
