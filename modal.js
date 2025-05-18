function abrirModal(titulo, texto, imagen) {
  document.getElementById("modal-titulo").innerText = titulo;
  document.getElementById("modal-texto").innerText = texto;
  document.getElementById("modal-imagen").src = imagen;
  document.getElementById("modal").style.display = "flex";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

// Lista de tarjetas
const tarjetas = [
  "tarjeta1", "tarjeta2", "tarjeta3", "tarjeta4", "tarjeta5", 
  "tarjeta6", "tarjeta7", "tarjeta8", "tarjeta9", "tarjeta10"
];

let tarjetaActual = 0; // Empieza en la primera tarjeta

// Función para abrir el modal
function abrirModal(titulo, texto, imagen) {
  document.getElementById("modal-titulo").innerText = titulo;
  document.getElementById("modal-texto").innerText = texto;
  document.getElementById("modal-imagen").src = imagen;
  document.getElementById("modal").style.display = "flex";
}

// Función para cerrar el modal
function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

// Navegación con las flechas del teclado
window.addEventListener("keydown", function (event) {
  // Flecha derecha (cambiar a la siguiente tarjeta)
  if (event.key === "ArrowRight") {
    tarjetaActual = (tarjetaActual + 1) % tarjetas.length; // Avanza a la siguiente tarjeta
    abrirModal(
      document.getElementById(tarjetas[tarjetaActual]).children[0].innerText, 
      document.getElementById(tarjetas[tarjetaActual]).children[1].innerText, 
      "imagenes/teletrabajo.jpg" // Modificar con la ruta de imagen
    );
  }

  // Flecha izquierda (cambiar a la tarjeta anterior)
  if (event.key === "ArrowLeft") {
    tarjetaActual = (tarjetaActual - 1 + tarjetas.length) % tarjetas.length; // Retrocede a la anterior tarjeta
    abrirModal(
      document.getElementById(tarjetas[tarjetaActual]).children[0].innerText, 
      document.getElementById(tarjetas[tarjetaActual]).children[1].innerText, 
      "imagenes/teletrabajo.jpg" // Modificar con la ruta de imagen
    );
  }
});

// Cerrar el modal al hacer clic fuera del modal
window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
