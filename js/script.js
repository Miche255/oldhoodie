/*--------menu hamburguesa------*/
const toggleMenu = () => document.body.classList.toggle("open");

/*----------carrusel----------*/
let currentSlide = 0;

const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

// Auto avance cada 3 segundos
setInterval(() => showSlide(currentSlide + 1), 3000);

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});

function showSlide(index) {
    currentSlide = (index + totalSlides) % totalSlides;
    const offset = -currentSlide * 100;
    slides.style.transform = `translateX(${offset}%)`;
}
/*------------fin del carrusel----------*/
/*------------novedades---------*/
document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener el valor del correo electrónico
    const email = document.getElementById('emailInput').value;
    
    // Validar el correo electrónico
    if (isValidEmail(email)) {
        // Cambiar el contenido del elemento 'newsletterStatus'
        document.getElementById('newsletterStatus').textContent = 'Enviado';
        // Limpiar el campo de entrada del correo electrónico
        document.getElementById('emailInput').value = '';
    } else {
        alert('Por favor, ingresa un correo electrónico válido.');
    }
});

// Función para validar el correo electrónico
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
/*----------------fin de novedades---------*/