// Botón que hace scroll a contacto
document.getElementById("btn-contacto").addEventListener("click", () => {
  document.getElementById("contacto").scrollIntoView({ behavior: "smooth" });
});

// Formulario de contacto
const form = document.getElementById("form-contacto");
const estado = document.getElementById("estado");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  estado.textContent = "¡Gracias por tu mensaje, " + document.getElementById("nombre").value + "! 🚀";
  form.reset();
});
