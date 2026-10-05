## Ejercicio 1 Construyendo HTML desde JavaScript

**¿Qué hace este ejercicio?**
Crea desde JavaScript un título h1, un subtítulo h2, dos párrafos y una lista ul con cinco li y los inserta en el html.

**¿Qué conceptos de JavaScript utilizaste?**
Variables let , DOM, document.createElement() para crear los elementos, textContent para darles un nombre  y appendChild() para agregarlos al documento.

**¿Ya conocías estos conceptos?**
algunos el appendchild pero en append que utilizamos en la clase y create elemento lo demas tambien lo vimos en la clase pero tuve que investigar como funcionaban.
**¿Tuviste dificultades?**
No tanta una vez hice uno o dos elementos ya solo fue cosa de ir repitiendo el molde


**¿Utilizaste Inteligencia Artificial?**
No

## Ejercicio 2 Modificando elementos existentes 

**¿Qué hace este ejercicio?**
Selecciona el título ya creado en el ejercicio 1 y cambia su texto, le agrega un id, agrega una clase a los párrafos y modifica las propiedades visuales de color, alineacion y tamaño.

**¿Qué conceptos de JavaScript utilizaste?**
querySelector, querySelectorAll, forEach, classList.add, y la propiedad de style

**¿Ya conocías estos conceptos?**
algunos no, no sabia la funcion de querysellectorall.
**¿Tuviste dificultades?**
no pero tuve errores al definir variables por que al principio estaba definiendo la variable de titulo para el queryselector con el mismo nombre que utilice en la actividad 1.

**¿Utilizaste Inteligencia Artificial?**
Sí, para ver de que otras maneras podia hacer lo de agregar los parrafos a una clase, por que tenia dudas si se podia hacer en un ciclo.



## Ejercicio 3 Colección de elementos desde datos

**¿Qué hace este ejercicio?**
Tiene un arreglo con cinco objetos, cada uno tiene su nombre, tipo y descripción luego con un ciclo crea un div por tecnología, con borde y separación, y los mete dentro de un contenedor general.

**¿Qué conceptos de JavaScript utilizaste?**
Arreglos, objetos, forEach, acceso a propiedades, DOM y estilos.

**¿Ya conocías estos conceptos?**
algunos no, no sabia que se podian hacer arreglos de objetos en JS

**¿Tuviste dificultades?**
No solo unos errores pequeños al pasarle los datos a los contenedores, por que solo hice una distincion por mayusculas en el primer caracter del nombre de las variables.

**¿Utilizaste Inteligencia Artificial?**
Sí la ia me sugirio meter todo en un contenedor general por la actividad de el reordenamiento de elementos.



## Ejercicio 4  El DOM también se puede reorganizar

**¿Qué hace este ejercicio?**
Agrega dos botones el de reorganizar página que  mueve las tarjetas, el título y la lista a otro orden, y restaurar orden los devuelve a su posición original. No se crean elementos nuevos solo se mueven los existentes

**¿Qué conceptos de JavaScript utilizaste?**
addEventListener, querySelector, appendChild e insertBefore para mover nodos que ya existen

**¿Ya conocías estos conceptos?**
El de insertBefore fue el concepto que descubri en este ejercisio, inserta cosas antes del nodo elegido de referencia.

**¿Tuviste dificultades?**
si, al agregar más ejercicios, el botón de restaurar dejó la página desordenada; lo corregí usando insertBefore con los botones del ejercicio 4 como punto de referencia fijo

**¿Utilizaste Inteligencia Artificial?**
Sí la ia me sugirio como lograr que los botones tuvieran su funcionamiento normal despues de agregar mas elementos al DOM



## Ejercicio 5  Agregar y eliminar elementos 

**¿Qué hace este ejercicio?**
Agrega dos botones uno agrega a una lista un elemento numerado automáticamente y otro elimina el último. Si la lista está vacía.

**¿Qué conceptos de JavaScript utilizaste?**
children.length, lastElementChild, removeChild, y eventos click.

**¿Ya conocías estos conceptos?**
Algunos no, como el removechild y en general la propiedad children. 

**¿Tuviste dificultades?**
si, justamente con lo de la propiedad children. pero solo fue de no saber que hacian.

**¿Utilizaste Inteligencia Artificial?**
si me propuso lista.children.length + 1 que da el número del siguiente elemento y lista.removeChild(lista.lastElementChild) quita el último.



## Ejercicio 6  Eventos e interacción 

**¿Qué hace este ejercicio?**
Crea un Panel interactivo con tres botones el primero para ocultar y mostrar un texto, el siguiente para cambiar el texto, ye el ultimo cambia el color de fondo del panel y una caja que reacciona al mouse cuando lo pasamos arriba con un evento de mouseover y mouseout. mouseover

**¿Qué conceptos de JavaScript utilizaste?**
addEventListener con distintos eventos, if/else, style.display. mouseover y mouseout

**¿Ya conocías estos conceptos?**
si por las activides anteriores y conocu los eventos de mouseover y mouseout

**¿Tuviste dificultades?**
no tantas pero el boton de cambiar texto solo se nota la primera vez porque siempre asigna el mismo texto. este lo deje asi por que igual cumple el evento

**¿Utilizaste Inteligencia Artificial?**
La ia me sugirio usar style.display = "none" oculta un elemento y "block" lo vuelve a mostrar;



## Ejercicio 7  Formulario dinámico

**¿Qué hace este ejercicio?**
Crea un formulario con nombre, descripción y tipo para agregar mas elementos al arreglo de objetos.
**¿Qué conceptos de JavaScript utilizaste?**
input, placeholder, value, trim(), push().

**¿Ya conocías estos conceptos?**
Trim() y push() fueron nuevos para mi. tambien set items que fueron funciones para guarar el arreglo.

**¿Tuviste dificultades?**
sip para comprender que hacian las funciones para agregar cosas al arreglo.

**¿Utilizaste Inteligencia Artificial?**
si utilice, me sugirio implementar trim() para quitar espacios al inicio y al final, y me ayudo con lo del guardado del arreglo.



## Ejercicio 8  Buscar y filtrar información 

**¿Qué hace este ejercicio?**
agrega Un campo para buscar que mientras se escribe, muestra solo las tarjetas cuyo nombre contiene el texto buscado

**¿Qué conceptos de JavaScript utilizaste?**
Evento input, toLowerCase(), includes(), children, style.display

**¿Ya conocías estos conceptos?**
si, ya los habia utilizado en los ejercisios anteriores, includes si fue nuevo. 

**¿Tuviste dificultades?**
si para la logica de que fuera apareciendo o desapareciendo segun las coinidencias de lo que se esta escribiendo. que al final era con un if que cambiaba de estado el texto mienras no tuviera coincidencias con lo buscado.

**¿Utilizaste Inteligencia Artificial?**
utilice el toLowerCase() que ignora mayusculas y la linea de  nombre.includes(texto) es true si el nombre contiene el texto y con el campo vacío es true para todos, así que se muestran todas; las tarjetas que no coinciden se ocultan con display = none.



## Ejercicio 9  Estado y LocalStorage 

**¿Qué hace este ejercicio?**
Guarda las tecnologias en localStorage al recargar, recupera las guardadas y reconstruye las tarjetas tambien agrega un el boton de borrar datos guardados elimina todo y regresa al estado inicial.

**¿Qué conceptos de JavaScript utilizaste?**
localStorage setItem, getItem, removeItem, JSON.stringify, JSON.parse, location.reload().

**¿Ya conocías estos conceptos?**
algunos pero los vinculados con el json y la modificacion de estos no los comprendia muy bien.

**¿Tuviste dificultades?**
si para implementar la permanencia de los datos del arreglo en la pagina. que fue con lo de localstorage en la actividad 7 debajo de la linea que guardaba el arreglo.

**¿Utilizaste Inteligencia Artificial?**
Me sugirio usar el localStorage solo guarda texto, por eso JSON.stringify() convierte el arreglo en texto al guardar y JSON.parse() lo convierte de vuelta en arreglo al recuperar.tambien me sugirio el location.reload() recarga la página después de borrar.



## Ejercicio 10   Formularios y AJAX  

**¿Qué hace este ejercicio?**
Agrega un formulario creado con JS busca un usuario de GitHub. Con fetch() consulta https://api.github.com/users/USUARIO y muestra avatar, usuario, nombre real, repositorios publicos, seguidores, seguidos y enlace al perfil

**¿Qué conceptos de JavaScript utilizaste?**
preventDefault(), fetch, promesas then / .catch, respuesta.json(), respuesta.status, respuesta.ok, throw new Error.
**¿Ya conocías estos conceptos?**
aqui la mayoria fue nuevo para mi, sobre todo lo del fetch y las promesas que aunque ya vistas en clase, aprendi mas cosas sobrel el funcionamiento

**¿Tuviste dificultades?**
si para entender la implementacion del fetch y con lo de la respuesta. tambien tuve un errores al momento de obtener los datos pero me di cuenta de lo que fallaba integrando verificaciones de errores

**¿Utilizaste Inteligencia Artificial?**
Use event.preventDefault() que  evita que el navegador recargue la pagina al enviar el formulario. fetch(url) para hacer la peticion y .then que se ejecuta cuando llega la respuesta. tambien me sugirio respuesta.json() convierte el texto JSON en un objeto

**¿Qué entiendes por AJAX?**
Es cuando se piden datos a un servidor desde JavaScript sin recargar la página y usando la respuesta para modificar el DOM

**¿Por qué la página no necesita recargarse para obtener nueva información?**
por que se hace la peticion en segundo plano y solo se cambia la parte que necesita ser actualizada tambien event.preventDefault() evita que el navegador recargue la pagina al enviar el formulario

**¿Qué hace fetch()?**
Envia una peticion HTTP a una URL y devuelve la promesa que sera resuelta cuando llega la respuesta del servidor.

**¿Qué representa la respuesta obtenida del servidor?**
es un objeto con la informacion de la respuesta y otra informacion
si fue exitosa el contenido se lee con .json()

**¿Qué es JSON y para qué se utilizó?**
es un formato de texto para guardar y intercambiar datos de forma estructurada, y se utilizo por que fue lo que recibimos como respuesta y con esto pudimos crear los objetos que mostramos en la pagina

**Qué hace event.preventDefault() en el formulario?**
vita que el navegador recargue la pagina al enviar el formulario

**¿Qué diferencia existe entre un error en la petición y buscar un usuario que no existe?**
cuando se busca un usuario que no existe la peticion si puede ser completada pero con el 404 la peticion ni si quiera obtiene respuesta y el feth falla internamente en el catch.

**Describe, paso a paso, el recorrido de los datos desde que el usuario presiona “Buscar usuario” hasta que la información aparece en pantalla.**

1- el usuario introduce un nombre y presiona buscar
2-Se activa el evento submit y preventDefault() evita la recarga 
3-se verifica que los campos no tenga error o esten vacios 
4-fetch envia la peticion a la API
5-si todo esta bien en el status el servidor regresa el contenido en un objeto
6-con este objeto se crean los elementos y se muestran en la pantalla mediante un appendchild sin recargar la pagina