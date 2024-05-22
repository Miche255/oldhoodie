document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById("form_contac1");
    const nombre = document.getElementById("form_nom");
    const telefono = document.getElementById("form_tel");
    const mail = document.getElementById("form_email");
    const archivo = document.getElementById("form_img");
    const fileError = document.getElementById("file_error");

    const validar_nomb = /^[a-zA-Z\s]+$/;
    const validar_mail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const validar_telefono = /^\d{10}$/;

    const iconoValido1 = document.getElementById("valido1");
    const iconoError1 = document.getElementById("error1");

    const iconoValido2 = document.getElementById("valido2");
    const iconoError2 = document.getElementById("error2");

    const iconoValido3 = document.getElementById("valido3");
    const iconoError3 = document.getElementById("error3");

    nombre.addEventListener("blur", validarNombre);
    mail.addEventListener("blur", validarMail);
    telefono.addEventListener("blur", validarTelefono);
    archivo.addEventListener("change", validarArchivo);

    function validarNombre() {
        const valor = nombre.value.trim();
        if (validar_nomb.test(valor)) {
            iconoValido1.style.display = "inline-block";
            iconoError1.style.display = "none";
            return true;
        } else {
            iconoValido1.style.display = "none";
            iconoError1.style.display = "inline-block";
            return false;
        }
    }

    function validarTelefono() {
        const valor = telefono.value.trim();
        if (validar_telefono.test(valor)) {
            iconoValido2.style.display = "inline-block";
            iconoError2.style.display = "none";
            return true;
        } else {
            iconoValido2.style.display = "none";
            iconoError2.style.display = "inline-block";
            return false;
        }
    }

    function validarMail() {
        const valor = mail.value.trim();
        if (validar_mail.test(valor)) {
            iconoValido3.style.display = "inline-block";
            iconoError3.style.display = "none";
            return true;
        } else {
            iconoValido3.style.display = "none";
            iconoError3.style.display = "inline-block";
            return false;
        }
    }

    function validarArchivo() {
        const maxFileSize = 2 * 1024 * 1024; // 2 MB en bytes
        const file = archivo.files[0];
        if (file && file.size > maxFileSize) {
            fileError.style.display = "inline";
            archivo.value = ""; // Resetea el campo de archivo
            return false;
        } else {
            fileError.style.display = "none";
            return true;
        }
    }

    form.addEventListener('submit', function (event) {
        if (!validarNombre() || !validarTelefono() || !validarMail() || !validarArchivo()) {
            event.preventDefault();
            alert('Por favor, complete todos los campos correctamente.');
        }
    });
});
const toggleMenu = () => document.body.classList.toggle("open");
