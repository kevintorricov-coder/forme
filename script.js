// Base inicial de JavaScript para el proyecto FORME
document.addEventListener("DOMContentLoaded", () => {
  // --- Aquí agrega cada quien su código ---
});

const textoIntro = document.querySelector(".intro-texto");

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
            observador.unobserve(entrada.target);
        }
    });
}, {
    threshold: 0.2
});

if (textoIntro) {
    observador.observe(textoIntro);
}
