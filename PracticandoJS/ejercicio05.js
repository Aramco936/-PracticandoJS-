let lista5 = document.createElement("ul");
let mensaje5 = document.createElement("p");

let botonAdd = document.createElement("button");
botonAdd.textContent ="Agregar elemento";

let botonDel = document.createElement("button");
botonDel.textContent ="Eliminar elemento";

document.body.appendChild(botonAdd);
document.body.appendChild(botonDel);
document.body.appendChild(mensaje5);
document.body.appendChild(lista5);

botonAdd.addEventListener("click", function(){
    let numero = lista5.children.length + 1;
    let elemento = document.createElement("li");
    elemento.textContent = "Elemento " + numero;
    lista5.appendChild(elemento);
    mensaje5.textContent="";
});

botonDel.addEventListener("click",function(){
    if (lista5.children.length === 0){
        mensaje5.textContent = "La lista está vacía";
    }else{
        lista5.removeChild(lista5.lastElementChild);
        mensaje5.textContent="";
    }
});