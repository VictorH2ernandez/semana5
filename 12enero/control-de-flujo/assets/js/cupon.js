let precio=parseInt(prompt("Introduce el precio: "));
let cupon= prompt("Introduce el cupón: ")
let descuento;
let final;

switch(cupon){
    case "bronce":
        descuento= precio*0.05;
        final = precio - descuento;
        console.log(final)
    break;
    case "plata":
        descuento= precio*0.10;
        final = precio - descuento;
        console.log(final)
    break;
    case "oro":
        descuento= precio*0.20;
        final = precio - descuento;
        console.log(final)
    break;
    case "platino":
        descuento= precio*0.25;
        final = precio - descuento;
        console.log(final)
    break;
    default:
     
        console.log("valor invalido")
    break;
    
} 

/* const operacion = (precio,descuento)=>{
    
    precioNuevo = precio*(1-descuento/100)
    return precioNuevo;
} */

    document.write("El precio de su producto es $" + precio + " tiene cupon " + cupon + " y su precio final con descuento es: $"+final)

//document.write("El precio de su producto es $" + precio + " tiene cupon " + cupon + " y su precio final con descuento es: $"+final)