let amigos_ingresados = [];
let listaMostrada = document.getElementById("listaAmigos");
let amigoEscogido = document.getElementById("resultado");

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let amigoIngresado = input.value.trim();

    if (amigoIngresado != "") {
        amigos_ingresados.push(amigoIngresado);

        let li = document.createElement("li");
        li.textContent = amigoIngresado;
        listaMostrada.appendChild(li);

        input.value = "";
        amigoEscogido.innerHTML = "";
    } else {
        amigoEscogido.innerHTML = "<li>El nombre ingresado no es válido</li>";    
    }
}


function sortearAmigo() {
    let randomRango = Math.floor(Math.random() * amigos_ingresados.length);
    let amigoSorteado = amigos_ingresados[randomRango];
    listaMostrada.innerHTML = "";
    amigoEscogido.innerHTML = "<li>El amigo secreto sorteado es: " + amigoSorteado;
}

