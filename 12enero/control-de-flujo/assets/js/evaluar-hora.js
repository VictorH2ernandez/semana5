let hora= parseInt(prompt("Ingrese solo un digito de la hora (6-11, 12-18, 19-23, 0-5)"));

if(hora >=6 && hora<=11){
    document.write("<h2>" + "Buenos dias :3 "+ "</h2>");
}else if(hora >=12 && hora<=18){
document.write("<h2>"+"Buenas tardes :0 "+ "</h2>");
}else if(hora >=19 && hora<=23){11
    document.write("Buenas noches  ")
}


else if(hora >=0 && hora<=5){11
    document.write("Deja dormir xd ")
}
else{

    document.write("oraaaaaaa ¿Qué hora es esa? ")
}