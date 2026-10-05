let panel6 = document.createElement("div");
panel6.style.border = "2px solid #333";
panel6.style.padding = "10px";
panel6.style.margin = "10px 0";

let titulo6 = document.createElement("h2");
titulo6.textContent = "Panel interactivo";

let texto6 = document.createElement("h2");
texto6.textContent = "Este es un texto ocultable";

// botones

let botonOcultar = document.createElement("button");
botonOcultar.textContent = "esconder/mostrar texto";

let botonCambiar = document.createElement("button");
botonCambiar.textContent = "cambiar texto";

let botonColor = document.createElement("button");
botonColor.textContent = "cambiar color";

// Elemento con otro evento mouseover / mouseout
let caja6 = document.createElement("div");
caja6.textContent = "Pasa el mouse sobre mí";
caja6.style.padding = "20px";
caja6.style.marginTop = "10px";
caja6.style.backgroundColor = "lightgray";

// Armar el panel
panel6.appendChild(titulo6);
panel6.appendChild(botonOcultar);
panel6.appendChild(botonCambiar);
panel6.appendChild(botonColor);
panel6.appendChild(texto6);
panel6.appendChild(caja6);
document.body.appendChild(panel6);

// boton de ocultar

botonOcultar.addEventListener("click", function(){
    if (texto6.style.display === "none"){
        texto6.style.display = "block";
    }else{
        texto6.style.display = "none";
    }
});

// cambiar texto

botonCambiar.addEventListener("click", function () {
    texto6.textContent = "El texto cambio";
});

//cambiar color del panel

botonColor.addEventListener("click", function () {
    panel6.style.backgroundColor = "lightyellow";
});

//evento mouseover y mouseout

caja6.addEventListener("mouseover", function () {
    caja6.style.backgroundColor = "lightgreen";
    caja6.textContent = "¡Mouse encima!";
});

caja6.addEventListener("mouseout", function () {
    caja6.style.backgroundColor = "lightgray";
    caja6.textContent = "Pasa el mouse sobre mí";
});



