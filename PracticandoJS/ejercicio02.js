let titulomod = document.querySelector("h1");
titulomod.textContent = "Practica JavaScript";
titulomod.id = "titulo-principal";

let parrafos = document.querySelectorAll("p");

parrafos.forEach(function (p) {
    p.classList.add("parrafo-estilo");
});

titulomod.style.color = "darkblue";
titulomod.style.textAlign = "center";
titulomod.style.fontSize = "48px";


