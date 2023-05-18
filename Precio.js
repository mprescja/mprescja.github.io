let botonEnviar = document.getElementById("boton-enviar");

botonEnviar.onclick = function (evento) {
  evento.preventDefault();
  let nombre = document.getElementById("name").value;
  alert("La Solicitud se a realizado con exito Sr. " + nombre);
};

