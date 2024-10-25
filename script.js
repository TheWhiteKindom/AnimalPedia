// script.js
// "Base de datos" simulada
const database = [
    { username: "usuario1", password: "1234" },
    { username: "usuario2", password: "abcd" }
];

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Verificar si el usuario y contraseña coinciden con la "base de datos"
    const user = database.find(user => user.username === username && user.password === password);

    if (user) {
        message.style.color = "green";
        message.textContent = "¡Login exitoso!";
        setTimeout(() => {
            window.location.href = "../Form/form.html";
            console.log(window.location.href);
        }, 1000);
    } else {
        message.style.color = "red";
        message.textContent = "Usuario o contraseña incorrectos.";
    }
}
