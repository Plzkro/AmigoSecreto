// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Declarar array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let inputNombre = document.getElementById("amigo").value.trim();

    // Validar la entrada
    if (inputNombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Actualizar el array de amigos
    amigos.push(inputNombre);

    // Limpiar el campo de entrada
    document.getElementById("amigo").value = "";

    // Actualizar la lista de amigos en el HTML
    actualizarListaAmigos();
}

// Función para recorrer el array y mostrar los amigos en la lista HTML
function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    let listaAmigos = document.getElementById("listaAmigos");

    // Limpiar la lista existente
    listaAmigos.innerHTML = "";

    // Iterar sobre el arreglo y agregar elementos a la lista
    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    }
}

// Función para seleccionar un amigo de manera aleatoria
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("La lista de amigos está vacía. Por favor, añada amigos antes de sortear.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el HTML
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}
