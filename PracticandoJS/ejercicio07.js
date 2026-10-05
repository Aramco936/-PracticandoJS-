let formulario7 = document.createElement("div");

let inputNombre = document.createElement("input");
inputNombre.placeholder="nombre";

let inputTipo = document.createElement("input");
inputTipo.placeholder="Tipo";

let inputDescripcion = document.createElement("input");
inputDescripcion.placeholder="Descripcion";

let botonAddtec=document.createElement("button");
botonAddtec.textContent= "Agregar tecnologia";

let mensaje7 = document.createElement("p");

formulario7.appendChild(inputNombre);
formulario7.appendChild(inputTipo);
formulario7.appendChild(inputDescripcion);
formulario7.appendChild(botonAddtec);
formulario7.appendChild(mensaje7);
document.body.appendChild(formulario7);

botonAddtec.addEventListener("click",function(){
    let nombre7 = inputNombre.value.trim();
    let tipo7=inputTipo.value.trim();
    let descripcion7=inputDescripcion.value.trim();

    if (nombre7 === "" || tipo7===""||descripcion7 === "" ){
         mensaje7.textContent = "Todos los campos son obligatorios.";
         return;
        }
        
    // crear tarjeta nueva

    let tarjeta7 = document.createElement("div");

    let h3 = document.createElement("h3");
    h3.textContent = nombre7;

    let pTipo = document.createElement("p");
    pTipo.textContent = "Tipo: " + tipo7;

    let pDesc = document.createElement("p");
    pDesc.textContent = descripcion7;

    tarjeta7.appendChild(h3);
    tarjeta7.appendChild(pTipo);
    tarjeta7.appendChild(pDesc);

    //aspecto de la tarjeta
    tarjeta7.style.border = "2px solid #333";
    tarjeta7.style.padding = "10px";
    tarjeta7.style.margin = "10px 0";

    contenedorTecnologias.appendChild(tarjeta7);
    
    //guardar en el arreglo
    tecnologiasWeb.push({ Nombre: nombre7, Tipo: tipo7, Descripcion: descripcion7 });
    localStorage.setItem("tecnologias", JSON.stringify(tecnologiasWeb));
    // limpiar campos
    inputNombre.value = "";
    inputDescripcion.value = "";
    inputTipo.value = "";
    mensaje7.textContent = "Tecnología agregada.";
})


