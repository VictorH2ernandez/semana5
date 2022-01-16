let cadena1 = "hola";
console.log(cadena1);
let cadena2 = new String ("Adios");
console.log(cadena2);
 //let arreglo = new Array();
//console.log(arreglo);

// includes () busca la cadena en otra y regresa true o false 
console.log(cadena2.toLowerCase().includes("a"));
// convierte las mayusculas en minusculas
console.log (cadena2.toLowerCase());
console.log(cadena2.toUpperCase());
 
// cohersion y coversion
// cohersion - Java scrip convierte en automatico un tipo de dato en otro 
console.log(cadena2.toLowerCase());

/* Funcion que recibe una palabra y la regresa invertida */

let palabra = "Hola Mundo";
let arreglo = palabra.split(""); //Split separa las letras de la cadena y las convierte en arreglo
console.log(arreglo);
 //para invertir la palabra hola mundo
console.log(arreglo.reverse().join(""));

//con esta funcion podemos invertir la palabra generation
function invertirPalabra(cadena){
    let arreglo = cadena.split(""); // convirtiendo la cadena en un arreglo
    arreglo.reverse();// invirtiendo un arreglo
    let cadenaInvertida =arreglo.join(""); //join une los elementos de un arreglo y los convierte en cadena
     return console.log(cadenaInvertida);
}
invertirPalabra("Generation");
//para invertir una palabra primero se convierte a arreglo con split de ahi se invierte el arreglo con reverse y se une la cadena con join
