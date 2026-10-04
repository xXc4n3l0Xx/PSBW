//guardo el orden original porque lo uso como referencia
const ordenOriginal = [lista1, lista2, lista3];

//lo pongo como let porque lo estaré modificando dependiendo del botón
let ordenActual = [...ordenOriginal];

//creamos el botón y lo insertamos
const botonRecorrer = document.createElement("button");
botonRecorrer.textContent = "Recorrer en 1 las posiciones de los elementos";
document.body.append(botonRecorrer);


//el eventListener y una funcion implícita porque nadie más la usa, da igual
botonRecorrer.addEventListener("click", function () {
    const nuevoOrden = [];

    for (let i = 0; i < ordenActual.length; i++) {
        if (i < ordenActual.length - 1) {
            nuevoOrden[i + 1] = ordenActual[i];
        } else {
            nuevoOrden[0] = ordenActual[i];
        }
    }

    const despues = ordenActual[ordenActual.length - 1].nextSibling;

    for (const lista of nuevoOrden) {
        document.body.insertBefore(lista, despues);
    }

    ordenActual = nuevoOrden;
});


const botonRestaurar = document.createElement("button");
botonRestaurar.textContent = "Restaurar las posiciones de los elementos";
document.body.append(botonRestaurar);

botonRestaurar.addEventListener("click", function () {
    const despues = ordenActual[ordenActual.length - 1].nextSibling;

    for (const lista of ordenOriginal) {
        document.body.insertBefore(lista, despues);
    }

    ordenActual = [...ordenOriginal];
});