let edad1= document.getElementById("edad");
let y=new Date().getFullYear();

function calculoedad(){
    let edad2=parseInt(prompt("Ingresar el año en que nacio"));
    let calculo= y - edad2;
    edad1.textContent="El año que ingresaste es: " + edad2 + " estamos en el  " + y + " por lo tanto tu edad es " + calculo;
}
