//esto no sirve, pero estoy seguro de que en otros lenguajes quizás debería
//const titulo = document.createElement("h1").textContent = "Prueba de declaracion de titulo en la misma linea que su contenido";

//esto sí sirve
const titulo = document.createElement("h1");
titulo.textContent = "Este es un titulo h1 que se tuvo que declarar y modificar en lineas diferentes";
//si no lo incrusto, no se ve
document.body.appendChild(titulo)

//buena idea, mala implementacion
//const titulo, titulo2 = document.createElement("h1"), document.createElement("h2");

//ahora sí
const titulo1 = document.createElement("h1"), titulo2 = document.createElement("h2");
titulo1.textContent = "Este es un titulo h1 pero declarado junto al 2";
titulo2.textContent = "Yo soy el 2";
//child sólo acepta 1 argumento
//document.body.appendChild(titulo1,titulo2)
document.body.append(titulo1, titulo2)

//nada nuevo, es lo mismo que arriba
const parrafo1 = document.createElement("p"), parrafo2 = document.createElement("p");
parrafo1.textContent = "Yo soy el parrafo1 y no tengo nada de valor de momento";
parrafo2.textContent = "Yo soy el 2 y tampoco hay nada bueno aquí";

document.body.append(parrafo1, parrafo2);

const lista1 = document.createElement("ul"), lista2 = document.createElement("ul"), lista3 = document.createElement("ul"); 

//forma 1, creo los elementos en un diccionario y los inserto con un for
const elementosLista1 = ["Lista1-1", "Lista1-2", "Lista1-3", "Lista1-4", "Lista1-5"];

//le doy nombre a cada elemento individual del diccionario y a su vez, debo nombrar cada elemento nuevo de lo que quiero insertar
for (const elem of elementosLista1){
    const elemenInsert = document.createElement("li");
    elemenInsert.textContent = elem;
    lista1.append(elemenInsert);
}

document.body.append(lista1);

//forma 2, más manual, creo e inserto todo uno por uno o algo así
const elem2_1 = document.createElement("li"), elem2_2 = document.createElement("li"), elem2_3 = document.createElement("li"), elem2_4 = document.createElement("li"), elem2_5 = document.createElement("li");
elem2_1.textContent = "Lista2-1";
elem2_2.textContent = "Lista2-2";
elem2_3.textContent = "Lista2-3";
elem2_4.textContent = "Lista2-4";
elem2_5.textContent = "Lista2-5";
lista2.append(elem2_1, elem2_2, elem2_3, elem2_4, elem2_5);

document.body.append(lista2);

//forma 3, con el querySelectAll
const elementosLista3 = ["Lista3-1", "Lista3-2", "Lista3-3", "Lista3-4", "Lista3-5"];

document.body.append(lista3);

const tercerLista = document.querySelectorAll("ul")[2];

for (const elem3 of elementosLista3){
    const elemenInsert3 = document.createElement("li");
    elemenInsert3.textContent = elem3;
    tercerLista.append(elemenInsert3);
}