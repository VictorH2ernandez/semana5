let title= document.getElementById('title');

console.log(title);
title.textContent ='Este texto es reservado';

let parrafos = document.getElementsByTagName('p')
console.log(parrafos);


/* parrafos[0].textContent='Parrafo Javascript'; */

/* for(let i=0; i < parrafos.length; i++){
    parrafos[i].textContent = 'parrafro ' + i + ' escritos desde Javascript'
}
 */

let email=document.getElementById('email');
let password= document.getElementById('password');

function getInformation(){
    console.log(email.value);
    console.log(password.value);
}