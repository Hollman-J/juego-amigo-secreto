let amigos_ingresados = [];
let lista = document.getElementById("listaAmigos");
let amigoEscogido = document.getElementById("resultado");
const agregar = document.getElementById("agregar");


function agregarYMostrarNombre() {
    let amigo = document.getElementById("amigo").value.trim();

    if (amigo !== "") {
        amigos_ingresados.push(amigo);
        lista.innerHTML = amigos_ingresados.join(", ");
        document.getElementById("amigo").value = ""; // limpiar input
    } else {
        amigoEscogido.innerHTML = "El nombre ingresado no es válido";    
    }
}

agregar.addEventListener("click", agregarYMostrarNombre);
