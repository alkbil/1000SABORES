//////////////////////////////////////////////////////////////////////////////////////
// Validación de formulario de login
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  if (!form) return; // Evita errores si no estamos en login.html

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let valido = true;

    // Validar email
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    if (!email.value.includes("@")) {
      emailError.textContent = "Por favor ingresa un correo válido.";
      valido = false;
    } else {
      emailError.textContent = "";
    }

    // Validar password
    const password = document.getElementById("password");
    const passwordError = document.getElementById("passwordError");
    if (password.value.length < 6) {
      passwordError.textContent = "La contraseña debe tener al menos 6 caracteres.";
      valido = false;
    } else {
      passwordError.textContent = "";
    }

    // Si todo está bien
    if (valido) {
      alert("✅ Inicio de sesión exitoso (simulado). Bienvenido a 1000 Sabores!");
      form.reset();
    }
  });
});
//////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////
// Validación de formulario de registro
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registroForm");
  if (!form) return; // Evita errores si no estamos en registro.html

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let valido = true;

    // Validar nombre
    const nombre = document.getElementById("nombre");
    const nombreError = document.getElementById("nombreError");
    if (nombre.value.trim().length < 3) {
      nombreError.textContent = "El nombre debe tener al menos 3 caracteres.";
      valido = false;
    } else {
      nombreError.textContent = "";
    }

    // Validar email
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    if (!email.value.includes("@")) {
      emailError.textContent = "Por favor ingresa un correo válido.";
      valido = false;
    } else {
      emailError.textContent = "";
    }

    // Validar password
    const password = document.getElementById("password");
    const passwordError = document.getElementById("passwordError");
    if (password.value.length < 6) {
      passwordError.textContent = "La contraseña debe tener al menos 6 caracteres.";
      valido = false;
    } else {
      passwordError.textContent = " ";
    }

    // Confirmar password
    const confirmPassword = document.getElementById("confirmPassword");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    if (confirmPassword.value !== password.value) {
      confirmPasswordError.textContent = "Las contraseñas no coinciden.";
      valido = false;
    } else {
      confirmPasswordError.textContent = "";
    }

    // Si todo está bien
    if (valido) {
      alert("✅ Registro exitoso (simulado). Bienvenido a 1000 Sabores!");
      form.reset();
    }
  });
});
//////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////
// Validación de formulario de contacto
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactoForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let valido = true;

    // Nombre
    const nombre = document.getElementById("nombre");
    const nombreError = document.getElementById("nombreError");
    if (nombre.value.trim().length < 3) {
      nombreError.textContent = "El nombre debe tener al menos 3 caracteres.";
      valido = false;
    } else {
      nombreError.textContent = "";
    }

    // Email
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    if (!email.value.includes("@")) {
      emailError.textContent = "Por favor ingresa un correo válido.";
      valido = false;
    } else {
      emailError.textContent = "";
    }

    // Mensaje
    const mensaje = document.getElementById("mensaje");
    const mensajeError = document.getElementById("mensajeError");
    if (mensaje.value.trim().length < 10) {
      mensajeError.textContent = "El mensaje debe tener al menos 10 caracteres.";
      valido = false;
    } else {
      mensajeError.textContent = "";
    }

    // Resultado
    if (valido) {
      alert("📩 Tu mensaje fue enviado (simulado). Gracias por contactarnos!");
      form.reset();
    }
  });
});
//////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////