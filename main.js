
import './style.css';

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const formData = new FormData(formulario);

  const inscripcion = {
    nombre: formData.get("nombre"),
    apellido: formData.get("apellido"),
    correo: formData.get("correo"),
    genero: formData.get("genero"),
    curso: formData.get("curso"),
    conocimientos: formData.getAll("conocimientos"),
    comentario: formData.get("comentario")
  };

  console.log(inscripcion);
});
