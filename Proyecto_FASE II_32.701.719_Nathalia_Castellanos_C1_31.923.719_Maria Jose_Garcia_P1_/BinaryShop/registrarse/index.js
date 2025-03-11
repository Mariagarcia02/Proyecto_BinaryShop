const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');

signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector('.form-wrapper.sign-in form');
    const messageElement = document.getElementById('message');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        const username = document.getElementById('name').value;
        const password = document.getElementById('password').value;

        // Credenciales predeterminadas
        const users = {
            "seller456": { password: "Intro123", redirect: "../comprador/index.html/" },
            "dancabello": { password: "J5*asdRD.s", redirect: "../vendedor/index.html/" },
            "root": { password: "dochouse", redirect: "../admin/index.html/" }
            "seller456": { password: "Intro123", redirect: "../comprador/index.html" },
            "dancabello": { password: "J5*asdRD.s", redirect: "../vendedor/index.html" },
            "root": { password: "dochouse", redirect: "../admin/index.html" }
        };

        if (users[username] && users[username].password === password) {
            // Redirige según el tipo de usuario
            window.location.href = users[username].redirect;
        } else {
            // Muestra mensaje de error si las credenciales son incorrectas
            messageElement.textContent = "Error de Usuario o Contraseña";
            messageElement.style.color = "red";
            messageElement.style.textAlign = "center";
            messageElement.style.display = "block";
        }
    });
});
