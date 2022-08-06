// titulo h1 "¿Estas buscando un desarrollador Web?"
const cambiarPregunta = () => document.getElementById("titulo").innerHTML = "Lo encontraste!";
document.getElementsByTagName("h1")[0].style.color = "lightblue";



const volverAPreguntar = () => document.getElementById("titulo").innerHTML = "¿Estas buscando un desarrollador Web?";
document.getElementsByTagName("h1")[0].style.color = "white";