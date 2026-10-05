let guardado9 = localStorage.getItem("tecnologias");

if (guardado9 !== null){
    let lista9=JSON.parse(guardado9);

    //creacion de tarjetas

    for (let i=5; i<lista9.length; i++){
        let tecnologia9 = lista9[i];

        let tarjeta9 = document.createElement("div");

        let nombre9 = document.createElement("h3");
        nombre9.textContent = tecnologia9.Nombre;

        let tipo9 = document.createElement("p");
        tipo9.textContent = "Tipo: " + tecnologia9.Tipo;

        let descripcion9 = document.createElement("p");
        descripcion9.textContent = tecnologia9.Descripcion;

        tarjeta9.appendChild(nombre9);
        tarjeta9.appendChild(tipo9);
        tarjeta9.appendChild(descripcion9);

        tarjeta9.style.border = "2px solid #333";
        tarjeta9.style.padding = "10px";
        tarjeta9.style.margin = "10px 0";

        contenedorTecnologias.appendChild(tarjeta9);
        tecnologiasWeb.push(tecnologia9);

    }
}

let botonBorrar = document.createElement("button");
botonBorrar.textContent = "Borrar dato";
document.body.appendChild(botonBorrar);

botonBorrar.addEventListener("click", function(){
    localStorage.removeItem("tecnologias");
    location.reload();
});