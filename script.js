// 📱 Enviar cita por WhatsApp
document.getElementById("formCita").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombreDuenio = document.getElementById("nombreDuenio").value;
  const nombrePerro = document.getElementById("nombrePerro").value;
  const telefono = document.getElementById("telefono").value;
  const fecha = document.getElementById("fecha").value;
  const servicio = document.getElementById("servicio").value;

  const mensaje = `Hola! Me gustaría agendar una cita en Estética Canina YHWH 🐾%0A
👤 Dueño: ${nombreDuenio}%0A🐶 Perrito: ${nombrePerro}%0A📞 Teléfono: ${telefono}%0A🗓️ Fecha y hora: ${fecha}%0A✂️ Servicio: ${servicio}`;

  const numero = "525560350896"; // ✅ Puedes cambiar este número después si lo necesitas
  const url = `https://wa.me/${numero}?text=${mensaje}`;

  window.open(url, "_blank");
  document.getElementById("formCita").reset();
});

// 🌸 Desplazamiento suave a secciones
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth",
  });
}

// 🪄 Animación suave al aparecer secciones
const sections = document.querySelectorAll("section");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  sections.forEach((sec) => {
    const position = sec.getBoundingClientRect().top;
    if (position < windowHeight - 100) {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }
  });
}

sections.forEach((sec) => {
  sec.style.opacity = "0";
  sec.style.transform = "translateY(40px)";
  sec.style.transition = "all 1s ease";
});

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
