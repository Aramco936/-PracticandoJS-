let titulo4 = document.querySelector("h1");
let subtitulo4 = document.querySelector("h2");
let parrafo41 = document.querySelectorAll("p")[0];
let parrafo42 = document.querySelectorAll("p")[1];
let lista4 = document.querySelector("ul");
let tarjetas4 = contenedorTecnologias;

let botonReor = document.createElement("button");
botonReor.textContent = "Reorganizar pagina";

let botonRes = document.createElement("button");
botonRes.textContent = "Restaurar pagina";

document.body.appendChild(botonReor);
document.body.appendChild(botonRes);

botonReor.addEventListener("click", function(){
    document.body.insertBefore(inputBuscar, botonReor);
    document.body.insertBefore(tarjetas4, botonReor);
    document.body.insertBefore(titulo4, botonReor);
    document.body.insertBefore(lista4, botonReor);
});

botonRes.addEventListener("click", function () {
    document.body.insertBefore(titulo4, botonReor);
    document.body.insertBefore(subtitulo4, botonReor);
    document.body.insertBefore(parrafo41, botonReor);
    document.body.insertBefore(parrafo42, botonReor);
    document.body.insertBefore(lista4, botonReor);
    document.body.insertBefore(inputBuscar, botonReor);
    document.body.insertBefore(tarjetas4, botonReor);
});