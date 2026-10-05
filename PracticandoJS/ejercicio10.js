let formulario10 = document.createElement("form");

let inputUsuario = document.createElement("input");
inputUsuario.placeholder="introduzca usuario de GitHub";

let botonBuscar = document.createElement("button");
botonBuscar.textContent = "buscar";

let resultado = document.createElement("div");
formulario10.appendChild(inputUsuario);
formulario10.appendChild(botonBuscar);
document.body.appendChild(formulario10);
document.body.appendChild(resultado);

formulario10.addEventListener("submit", function (event) {
    event.preventDefault();

    let usuario = inputUsuario.value.trim();

    if (usuario === "") {
        resultado.textContent = "Escribe un nombre de usuario.";
        return;
    }

    resultado.textContent = "Buscando a " + usuario + "...";
    
    fetch("https://api.github.com/users/" + usuario).then(function (respuesta) {
            //control de errores
            if (respuesta.status === 404) {
                throw new Error("El usuario no existe.");
            }
            if (!respuesta.ok) {
                throw new Error("El servidor respondió con un error (" + respuesta.status + ").");
            }
            return respuesta.json();
    
        }).then(function (datos) {
            resultado.textContent = "";

            let avatar = document.createElement("img");
            avatar.src = datos.avatar_url;
            avatar.width = 120;

            let login = document.createElement("h3");
            login.textContent = datos.login;

            let nombreReal = document.createElement("p");
            if (datos.name !== null){
                nombreReal.textContent= "nombre: " + datos.name;
            } else {
                 nombreReal.textContent = "Nombre: no disponible";
            }
            
            let repos = document.createElement("p");
            repos.textContent = "Repositorios publicos: " + datos.public_repos;

            let seguidores = document.createElement("p");
            seguidores.textContent = "Seguidores: " + datos.followers;

            let siguiendo = document.createElement("p");
            siguiendo.textContent = "Siguiendo: " + datos.following;

            let enlace = document.createElement("a");
            enlace.href = datos.html_url;
            enlace.textContent = "Ver perfil en GitHub";
            enlace.target = "_blank";

            resultado.appendChild(avatar);
            resultado.appendChild(login);
            resultado.appendChild(nombreReal);
            resultado.appendChild(repos);
            resultado.appendChild(seguidores);
            resultado.appendChild(siguiendo);
            resultado.appendChild(enlace);
        }).catch(function (error) {
            if (error.message.startsWith("El ")) {
                resultado.textContent = error.message;
            } else {
                resultado.textContent = "No se pudo completar la petición. Revisa tu conexión.";
            }
        });

    
});