/* const numeros =[5]; */

/* let numeros= new Array();

const numeros= [10,10,10,10,9,8,10,7,,10,9,10,8,10,10,10,7,9,10,9,10,10];

let sum = 0;

for (let i = 0; i < numeros.length; i++) {
    sum += numeros[i];
}
console.log(sum);


document.write(numeros[4]);

document.write("-------------------------------------") */

const numeros = [9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,9];
let sum = 0;
let prom;
let i;
for (i = 0; i < numeros.length; i++) {
    sum += numeros[i];
    prom= sum/20;
}
console.log(sum);
console.log(prom);
document.write("<br>"+numeros+"<br>")
document.write("La suma es: " + sum )

document.write("<br>" +"El promedio es: " + prom + "<br>")