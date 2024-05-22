const nombre = document.getElementById("form_name");
const apellido = document.getElementById("form_ape");
const mail = document.getElementById("form_mail");
const pass = document.getElementById("form_pass");
const repass = document.getElementById("re-form_pass");
const telefono = document.getElementById("form_tel");
const box_news = document.getElementById("form_news");
const box_term = document.getElementById("form_term");

const validar_nomb = /^[a-zA-Z]+$/; //$ indica final de cadena
const validar_apel = /^[a-zA-Z]+$/;
const validar_mail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //el {2,} especifica que al menos haya dos caracteres luego del punto
const validar_pass = /^(?=.*[A-Z])(?=.*\d)(?=.*[a-z]).{8,}$/; // la expresión ?= asegura que al menos exista lo que se debe comprobar
const validar_telefono = /^\d{10}$/;

const iconoValido1 = document.getElementById("valido1");
const iconoError1 = document.getElementById("error1");

const iconoValido2 = document.getElementById("valido2");
const iconoError2 = document.getElementById("error2");

const iconoValido3 = document.getElementById("valido3");
const iconoError3 = document.getElementById("error3");

const iconoValido4 = document.getElementById("valido4");
const iconoError4 = document.getElementById("error4");

const iconoValido5 = document.getElementById("valido5");
const iconoError5 = document.getElementById("error5");

const iconoValido6 = document.getElementById("valido6");
const iconoError6 = document.getElementById("error6");

// Oculta todos los iconos de validación y error al cargar la página
document.querySelectorAll('.material-icons').forEach(icon => {
    icon.style.display = 'none';
});

nombre.addEventListener("blur", validarNombre);
apellido.addEventListener("blur", validarApellido);
mail.addEventListener("blur", validarMail);
pass.addEventListener("blur", validarPass);
repass.addEventListener("blur", validarRepass);
telefono.addEventListener("blur", validarTelefono);
box_news.addEventListener("change", validarNews);
box_term.addEventListener("change", validarTerm);

function validarNombre() {
    var valor = nombre.value.trim();

    if (validar_nomb.test(valor)) {
        iconoValido1.style.display = "inline-block";
        iconoError1.style.display = "none";
    } else {
        iconoValido1.style.display = "none";
        iconoError1.style.display = "inline-block";
    }
}

function validarApellido() {
    var valor = apellido.value.trim();

    if (validar_apel.test(valor)) {
        iconoValido2.style.display = "inline-block";
        iconoError2.style.display = "none";
    } else {
        iconoValido2.style.display = "none";
        iconoError2.style.display = "inline-block";
    }
}

function validarMail() {
    var valor = mail.value.trim();

    if (validar_mail.test(valor)) {
        iconoValido3.style.display = "inline-block";
        iconoError3.style.display = "none";
    } else {
        iconoValido3.style.display = "none";
        iconoError3.style.display = "inline-block";
    }
}

function validarPass() {
    var valor = pass.value.trim();

    if (validar_pass.test(valor)) {
        iconoValido4.style.display = "inline-block";
        iconoError4.style.display = "none";
    } else {
        iconoValido4.style.display = "none";
        iconoError4.style.display = "inline-block";
    }
}

function validarRepass() {
    var valor1 = pass.value.trim();
    var valor2 = repass.value.trim();

    if (valor1 === valor2 && validar_pass.test(valor1)) {
        iconoValido4.style.display = "inline-block";
        iconoError4.style.display = "none";
    } else {
        iconoValido4.style.display = "none";
        iconoError4.style.display = "inline-block";
    }
}

function validarTelefono() {
    var valor = telefono.value.trim();

    if (validar_telefono.test(valor)) {
        iconoValido5.style.display = "inline-block";
        iconoError5.style.display = "none";
    } else {
        iconoValido5.style.display = "none";
        iconoError5.style.display = "inline-block";
    }
}

function validarTerm() {
    if (box_term.checked) {
        iconoValido6.style.display = "inline-block";
        iconoError6.style.display = "none";
    } else {
        iconoValido6.style.display = "none";
        iconoError6.style.display = "inline-block";
    }
}


// el boton enviar valida que todos los campos estes corrrectamente validados

function validarFormulario(event) {
    event.preventDefault(); // evita que el formulario se envie automaticamente

    // Validar todos los campos
    validarNombre();
    validarApellido();
    validarMail();
    validarPass();
    validarRepass();
    validarTelefono();
    validarTerm();

    // Comprobar si todos los campos están validados
    if (iconoError1.style.display === 'none' &&
        iconoError2.style.display === 'none' &&
        iconoError3.style.display === 'none' &&
        iconoError4.style.display === 'none' &&
        iconoError5.style.display === 'none' &&
        iconoError6.style.display === 'none') {

        document.getElementById("formulario").submit();// Si todos los campos están validados, enviar el formulario
    } else {
        // Si hay algún error, muestra un mensaje:
        alert("Por favor, completa correctamente todos los campos.");
    }
}
const toggleMenu = () => document.body.classList.toggle("open");
