function mostrarPassword() {

    const password = document.getElementById("password");
    const ojo = document.querySelector(".ojo");
    if (password.type === "password") {
        password.type = "text";
        ojo.textContent = "◉";
    } else {
        password.type = "password";
        ojo.textContent = "◉";
    }
}
function registrarUsuario() {

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;
    const confirmar = document.getElementById("confirmar").value;

    if (
        nombre === "" ||
        correo === "" ||
        password === "" ||
        confirmar === ""
    ) {
        alert("Por favor completa todos los campos.");
        return;
    }

    if (password.length < 8) {
        alert("La contraseña debe tener mínimo 8 caracteres.");
        return;
    }

    if (password !== confirmar) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    alert("Usuario registrado correctamente.");

    window.location.href = "login.html";
}
function mostrarConfirmarPassword() {

    const confirmar = document.getElementById("confirmar");

    if (confirmar.type === "password") {
        confirmar.type = "text";
    } else {
        confirmar.type = "password";
    }
}