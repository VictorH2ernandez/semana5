/* let miVariable = 10;
console.log(miVariable);

//Estructuras de control de flujo

let edad=17;
let tienesINE = false;

if(edad>=18 || tienesINE == true){
    console.log("Puedes ingresar");
}
else{
    console.log("No puedes entrar");
} */

let edad1 =19;

(edad1>=18) //condicion
    ? console.log("Mayor de edad")// if
    :console.log("Menor de edad");// else

    console.log("************************");

    let pregunta = (edad1 >=18)
    ? "Mayor de edad"
    : "Mayor de edad";

    console.log(pregunta);

    console.log("************************");

    let preguntaEdad= `Tengo ${edad1} años y soy ${(edad1 >=18) ? "Mayor" :"Menor"} de edad`; 

    console.log(preguntaEdad)

    console.log("************************");

/* 

    if(dia === 0){
        console.log("Domingo");
    } else if(dia === 1){
        console.log("Lunes")
    }
    else if(dia === 2){
    console.log("Martes")
   }
   else if(dia === 3){
    console.log("Miercoles")
   }
    else if(dia === 4){
    console.log("Jueves")
   }
   else if(dia === 5){
    console.log("Viernes")
   }

   else{
       console.log("Valoriunvalido")
   } */

   console.log("************************");
//Switch case

/* switch(variable a evaluar){
    case valor:
        -codigo a ejecutar-
    break;
    case valor:
        -codigo a ejecutar-
    break;
    defaul t:
       -codigo a ejecutar si sale de las opciones-
    break;
} */

let dia=4;

switch(dia){
    case 0:
        console.log("Domingo");
    break
    case 1:
        console.log("Lunes");
    break;
    case 2:
        console.log("Martes");
    break;
    case 3:
        console.log("Miercoles");
    break;
    case 4:
        console.log("Jueves");
    break;
    case 5:
        console.log("Viernes");
    break;
    case 6:
        console.log("Sabado");
    break
    default:
        console.log("Dia invalido");
        break;
}

/* console.log("************************");

let cuponDescuento="oro";
let descuento;

switch(cuponDescuento){
    case "Bonse":
        descuento=5;
        break;
    case "Plata":
    descuento=10;
        break
    case "oro":
        descuento=15;
        break;
    default:
        console.log("Cupón sin descuento");
        break;
}

console.log(descuento); */