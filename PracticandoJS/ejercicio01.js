let titulo = document.createElement("h1");
titulo.textContent = "Titulo";
document.body.appendChild(titulo);

let subtitulo = document.createElement("h2");
subtitulo.textContent = "subtitulo";
document.body.appendChild(subtitulo);

let parrafo1 = document.createElement("p");
parrafo1.textContent = "parrafo1";
document.body.appendChild(parrafo1);

let parrafo2 = document.createElement("p");
parrafo2.textContent = "parrafo2";
document.body.appendChild(parrafo2);


let lista = document.createElement("ul");

    let elemento1 = document.createElement("li");
    elemento1.textContent = "elemento1";
    lista.appendChild(elemento1);

    let elemento2 = document.createElement("li");
    elemento2.textContent = "elemento2";
    lista.appendChild(elemento2);

    let elemento3 = document.createElement("li");
    elemento3.textContent = "elemento3";
    lista.appendChild(elemento3);

    let elemento4 = document.createElement("li");
    elemento4.textContent = "elemento4";
    lista.appendChild(elemento4);

    let elemento5 = document.createElement("li");
    elemento5.textContent = "elemento5";
    lista.appendChild(elemento5);
    
document.body.appendChild(lista);