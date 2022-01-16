function sumar(numero1,numero2){
    //Operaciones o código a ejecutar
    return numero1 + numero2;
    console.log("Hola mundo")
}

let numero1=parseInt(prompt("Numero 1: "));
let numero2= parseInt(prompt("Numero 2: "));
let suma= sumar(numero1, numero2);
//template string 
//`backstick o comilla invertida

document.write(`La suma de ${numero1} y ${numero2} es ${suma} <br>`);
document.write("La suma de " + numero1 + " y " + numero2 + "es:" + suma);