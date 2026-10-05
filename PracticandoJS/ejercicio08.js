let inputBuscar = document.createElement("input");
inputBuscar.placeholder="Buscar tecnologia";

// insertar antes del
document.body.insertBefore(inputBuscar, contenedorTecnologias);

inputBuscar.addEventListener("input",function(){
    let texto8 = inputBuscar.value.toLowerCase().trim();
    let tarjetas8 = contenedorTecnologias.children;

    for (let tarjeta of tarjetas8){
        let nombre8 = tarjeta.querySelector("h3").textContent.toLowerCase();

        if (nombre8.includes(texto8)){
            tarjeta.style.display="block";
        }else{
            tarjeta.style.display = "none";
        }
    }
});
