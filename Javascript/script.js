let nom = "Tito";
let Nom = "Bana";

const g = 9.81;
const PI = 3.1416;


nom = "ete sech"

function saluda(){
  let valor = document.getElementById("campNom").value;
  document.getElementById("Resultat").innerHTML = "Hola " +valor;
}
function comprovaLogin(){
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("Password").value;
    
    if (usuario == "admin" && password=="1234"){
        alert("sessio iniciada")
    }
    else if (usuario === "1234"){
        alert("Usuari incorrecte")
    }
    else if (Contrasenya === "admin"){
        alert("Contrasenya incorrecte")
    }
    else if (usuario === "admin" && password==="1234"){
        alert("usuari i contrasenya incorrecte")
     }
}

function calcularPrecio() {
 const precio = document.getElementById("Precio").value;
 const radioSi = document.getElementById("ResidentesSi").checked;
 const radioNo = document.getElementById("ResidentesNo").checked;
 const familiaEspecial = document.getElementById("FamiliaEspecial").checked;
 const familiaNumerosa = document.getElementById("FamiliaNumerosa").checked;
 const familiaNormal = document.getElementById("FamiliaNormal").checked;

if(radioSi == true && familiaNormal == True){
        let precioFinal = precio * 0.25; 
        alert(precioFinal);
    }
    else if (radioNo == true && familiaNormal == true){
        let precioFinal = precio;
        alert(precioFinal);
    }
    else if (radioSi == true && familiaGeneral == true) {
        let precioFinal = precio * 0.30;
        alert(precioFinal);
    }
    else if (radioNo == true && familiaGeneral == true){
        let precioFinal = precio * 0.05;
        alert(precioFinal);
    }
    else if (radioSi == true && familiaEspecial == true) {
        let precioFinal = precio * 0.45;
        alert(precioFinal);
    }
    else if (radioNo == true && familiaEspecial == true) {
        let precioFinal = precio* 0.10;
        alert(precioFinal);
    }
    else{
        alert("Tienes que marcar una casilla en Residente y Familia");
    }
}
//Esto es un comentario
/*
Comentario multi linea hola soy luca mamani y soy boliviano
*/
//Las dos variables son diferentes
