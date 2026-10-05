let tecnologiasWeb = [
    {Nombre:"HTML",Tipo:"Marcado",Descripcion:"lenguaje de marcado que sirve para estructurar y mostrar páginas en la web"},
    {Nombre:"JavaScript",Tipo:"Lenguaje",Descripcion:"Lenguaje de programación que hace las páginas interactivas"},
    {Nombre: "CSS",Tipo: "Estilos", Descripcion: "Lenguaje de estilos que controla el aspecto visual de la página"},
    {Nombre: "Node.js",Tipo: "Entorno",Descripcion: "Entorno que permite ejecutar JavaScript fuera del navegador." },
    {Nombre: "React",Tipo: "Biblioteca",Descripcion: "Biblioteca de JavaScript para construir interfaces de usuario." }    
];

let contenedorTecnologias = document.createElement("div");
document.body.appendChild(contenedorTecnologias);

tecnologiasWeb.forEach(function(tecnologia){
    let tarjeta = document.createElement("div");

    let nombre = document.createElement("h3");
    nombre.textContent = tecnologia.Nombre;

    let tipo = document.createElement("p");
    tipo.textContent = "Tipo: " + tecnologia.Tipo;

    let descripcion = document.createElement("p");
    descripcion.textContent = tecnologia.Descripcion;



    tarjeta.appendChild(nombre);
    tarjeta.appendChild(tipo);
    tarjeta.appendChild(descripcion);
    

    tarjeta.style.border = "2px solid #333";
    tarjeta.style.padding = "10px";
    tarjeta.style.margin = "10px 0";

    contenedorTecnologias.appendChild(tarjeta);

});