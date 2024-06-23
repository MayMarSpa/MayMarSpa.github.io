function deslizar() {
    var contenido = document.getElementById("contenido-adicional");
    if (contenido.style.display === "none") {
    contenido.style.display = "block";
      // Desplazamiento suave hacia abajo
    contenido.scrollIntoView({ behavior: 'smooth' });
    } else {
    contenido.style.display = "none";
    contenido.scrollIntoView({ behavior: 'smooth' });
    }
}

document.getElementById('direccion').addEventListener('click', function() {
  document.getElementById('destino-direccion').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contacto').addEventListener('click', function() {
  document.getElementById('destino-contacto').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('mostrar-tabla').addEventListener('click', function() {
  document.getElementById('destino_mostrar_tabla').scrollIntoView({ behavior: 'smooth' });
});

function cambiarBoton() {
  var play = document.getElementById("play");
  if (play.textContent.endsWith("Mostrar Más")) {
  play.textContent = "Mostrar Menos";
  } else {
  play.textContent = "Mostrar Más";
  }
  }

