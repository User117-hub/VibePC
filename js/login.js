function mostrarPassword() {
    const password = document.getElementById("password");
    const ojo = document.getElementById("ojo");

    if (password.type === "password") {
        password.type = "text";
        ojo.textContent = "◉";
    } else {
        password.type = "password";
        ojo.textContent = "◌";
    }
}

function iniciarSesion() {
    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;

    if (correo === "" || password === "") {
        alert("Por favor completa todos los campos.");
        return;
    }

    if (password.length < 8) {
        alert("La contraseña debe tener mínimo 8 caracteres.");
        return;
    }

    alert("Inicio de sesión correcto.");

    
}
