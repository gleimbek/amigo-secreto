// Lista para almacenar los nombres ingresados
const listaAmigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    const inputNombre = document.getElementById("amigo");
    const nombreAmigo = inputNombre.value.trim();

    // Validar si el campo está vacío
    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre a la lista
    listaAmigos.push(nombreAmigo);
    
    // Limpiar el campo de entrada
    inputNombre.value = "";

    // Actualizar la lista en la página
    mostrarListaAmigos();
}

// Función para mostrar la lista de amigos
function mostrarListaAmigos() {
    const ulListaAmigos = document.getElementById("listaAmigos");
    ulListaAmigos.innerHTML = ""; // Limpiar contenido previo

    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${amigo}`;
        ulListaAmigos.appendChild(li);
    });
}

// Función para sortear el amigo secreto
function sortearAmigo() {
    const ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = ""; // Limpiar resultado anterior

    if (listaAmigos.length === 0) {
        alert("La lista está vacía. Agrega al menos un amigo antes de sortear.");
        return;
    }

    // Seleccionar un nombre aleatorio
    const indiceGanador = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceGanador];

    // Mostrar el resultado en pantalla
    const liResultado = document.createElement("li");
    liResultado.textContent = `El amigo secreto es: ${amigoSecreto}`;
    ulResultado.appendChild(liResultado);
}
