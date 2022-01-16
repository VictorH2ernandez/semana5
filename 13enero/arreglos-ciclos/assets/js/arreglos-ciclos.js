//include: para saber si tenemos un elemento, si es falso o verdadero. 
let numeros=[0,1,2,3,4,5,6,52,51,87,150,190]

document.write(`<br>`+ numeros.includes(`Hola`) + `<br>`)

let numerosPares = numeros.filter((elemento)=>{

/*     if(elemento % 2 ==0){
      return true;  
    } else{
        return false
    } */
    
    if (elemento > 10){
        return true;
    }

} );

document.write(`<br>` + numerosPares + `<br>`);

let frutas = ["mango", "uva", "piña", "mandarina", "manzana","aguacate", "sandia"]

let frutasFiltro= frutas.filter((fruta)=> {
/*     if (fruta.includes("i") ==true){
        return true;
    } */
    return fruta.includes("m"); // arroja un falso o verdadero pero no es tan explicita
});

document.write('<br>'+ frutasFiltro + '<br>');

//Sort
let otrosNumeros= [5,2,9,8,7,4,6,3,5,8,,1,2,54,21,11]
//let numeros= [5,2,9,8,7,4,6,3,5,8,,1,2,54,21,11]
document.write('<br>' + otrosNumeros.sort()+'<br>');

document.write("<br>" + numeros.reverse() + "<br>")

//Find busca un elemento y nos regresara solo un elemento que coumpla la condicion, el primer elemento

let frutaEncontrada= frutas.find((elemento)=>{
    return elemento.toLowerCase().includes("ma");
});

document.write("<br>" +frutaEncontrada + "<br>")