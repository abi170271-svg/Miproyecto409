// Mensaje de bienvenida específico para la página de Misión
window.onload = function() {
  alert("Estás en la sección Misión de DRY‑ON 🌍");
};

// Animación simple: resaltar valores al hacer clic
const valores = document.querySelectorAll(".valores li");
valores.forEach(valor => {
  valor.addEventListener("click", () => {
    valor.style.backgroundColor = "#e0f7fa";
    setTimeout(() => {
      valor.style.backgroundColor = "transparent";
    }, 1000);
  });
});

// Mostrar fecha y hora en el footer
function mostrarFechaHora() {
  const footer = document.querySelector("footer");
  let fecha = new Date().toLocaleString();
  let p = document.createElement("p");
  p.textContent = "Fecha y hora de visita: " + fecha;
  footer.appendChild(p);
}
mostrarFechaHora();
