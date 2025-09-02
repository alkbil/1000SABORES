// validaciones del formulario login
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    if (!form) return; // evitar errores si no estamos en login.html

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // prevenir el envío por defecto
        
        let valido = true;

        // Validar email
        const email = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        if (!email.value.includes('@')) {
            emailError.textContent = 'Por favor, ingresa un email válido.';
            valido = false;
        } else {
            emailError.textContent = '';
        }
        // Validar contraseña
        const password = document.getElementById('password');
        const passwordError = document.getElementById('passwordError');
        if (password.value.length < 6) {
            passwordError.textContent = 'La contraseña debe tener al menos 6 caracteres.';
            valido = false;
        } else {
            passwordError.textContent = '';
        }
        if (valido) {
            alert(" Inicio de sesion exitoso (simulado). Bienvenido a 1000 sabores!")
            form.requestFullscreen();  // enviar el formulario si es válido
        }
    });
});