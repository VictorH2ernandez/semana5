//Operadores aritmeticos (suma,resta,multiplicacion,división) %módulo, nos termine el residuo +,-,/,*,%.

let operacion = 3 * 5 + (10-5);
console.log(operacion)

let operacion2= 3-5/2*4;
console.log(operacion2)

/* Operadores relacionales */
//<,>,<=,>=,==,===,!=,!==
//nos dan un resultado boolean (true or false);

console.log(7<7);//no incluye el valor a comparar

console.log(7 == "7");//compara el vlor
console.log(7==="7");///cpmpara valor y tipo de dato

//incremento y decremento 

let incremento=5
//incremento+=5;
incremento = incremento +5
console.log(incremento);

 incremento -=5;
console.log(incremento);//5

incremento*=5;
console.log(incremento);

incremento /=5;

console.log(incremento);

// operador unitario
//++,-- (suma uno, resta uno)

let sumar =0;
console.log(sumar + "linea 39");
sumar ++;
console.log(sumar + "linea 40");
sumar++;
console.log(sumar);
sumar--;
sumar--;
sumar--;
console.log(sumar);

/*  */
for (let i=0;i<10; i++){
    /* codigo */
}

/* ++variable = preincremento 
primero modifica el valor y ya despues hace uso de la variable variable++ = postincremento 
usando la variable y despues hace el incremento */

let num=5;
console.log(num++);
console.log(num);

for(let i=0; i<5; i++){
    //interaccion
    //primera interaccion se detiene
    console.log("Este es el ciclo padre");

    for(let j=0 ; j <5; j++) {
        //hace sus interacciones(repeticiones) propias
        console.log("Este es el ciclo hijo")
    }
}