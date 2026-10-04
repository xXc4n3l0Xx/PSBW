const formulario10 = document.createElement("form");

const inputUsuario10 = document.createElement("input");
inputUsuario10.placeholder = "Usuario de GitHub";

const btnBuscar10 = document.createElement("button");
btnBuscar10.type = "submit";
btnBuscar10.textContent = "Buscar usuario";

const resultado10 = document.createElement("section");

formulario10.append(inputUsuario10, btnBuscar10);
document.body.append(formulario10, resultado10);

function mostrarMensaje10(texto, color) {
    const mensaje = document.createElement("p");
    mensaje.textContent = texto;
    mensaje.style.color = color;
    resultado10.replaceChildren(mensaje);
}

formulario10.addEventListener("submit", async function (event) {
    event.preventDefault();

    const usuario = inputUsuario10.value.trim();

    if (usuario === "") {
        mostrarMensaje10("Escribe un nombre de usuario.", "red");
        return;
    }

    mostrarMensaje10("Buscando...", "gray");

    try {
        const respuesta = await fetch("https://api.github.com/users/" + encodeURIComponent(usuario));

        if (respuesta.status === 404) {
            mostrarMensaje10("El usuario \"" + usuario + "\" no existe en GitHub.", "red");
            return;
        }

        if (respuesta.status === 403) {
            mostrarMensaje10("GitHub rechazó la petición. Puede que se haya alcanzado el límite de consultas; intenta más tarde.", "red");
            return;
        }

        if (!respuesta.ok) {
            mostrarMensaje10("El servidor respondió con un error (" + respuesta.status + ").", "red");
            return;
        }

        const datos = await respuesta.json();

        const tarjeta = document.createElement("div");
        tarjeta.style.border = "1px solid gray";
        tarjeta.style.padding = "12px";
        tarjeta.style.maxWidth = "320px";

        const avatar = document.createElement("img");
        avatar.src = datos.avatar_url;
        avatar.alt = "Avatar de " + datos.login;
        avatar.style.width = "120px";
        avatar.style.borderRadius = "50%";

        const login = document.createElement("h3");
        login.textContent = datos.login;

        const nombreReal = document.createElement("p");
        if (datos.name !== null) {
            nombreReal.textContent = "Nombre: " + datos.name;
        } else {
            nombreReal.textContent = "Nombre: no disponible";
        }

        const repos = document.createElement("p");
        repos.textContent = "Repositorios públicos: " + datos.public_repos;

        const seguidores = document.createElement("p");
        seguidores.textContent = "Seguidores: " + datos.followers;

        const siguiendo = document.createElement("p");
        siguiendo.textContent = "Siguiendo: " + datos.following;

        const enlace = document.createElement("a");
        enlace.href = datos.html_url;
        enlace.textContent = "Ver perfil en GitHub";
        enlace.target = "_blank";

        tarjeta.append(avatar, login, nombreReal, repos, seguidores, siguiendo, enlace);
        resultado10.replaceChildren(tarjeta);
    } catch (error) {
        mostrarMensaje10("No se pudo completar la petición. Revisa tu conexión a internet.", "red");
    }
});