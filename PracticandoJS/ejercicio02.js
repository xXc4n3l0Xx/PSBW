//busco el primer y único h2 del documento anterior, estoy accediendo a él a través de una nueva const que punta al mismo lugar que la del ejercicio 1
const elH2DelEjercicio1 = document.querySelector("h2");
elH2DelEjercicio1.textContent = "Soy el h2 del ejercicio1 pero me modificaron en el ejercicio 2";
elH2DelEjercicio1.id = "primerSubtitulo";

elH2DelEjercicio1.style.color = "darkblue";
elH2DelEjercicio1.style.fontSize = "28px";
elH2DelEjercicio1.style.backgroundColor = "#f0f0f0";
elH2DelEjercicio1.style.textAlign = "center";



//Lo mismo que arriba, pero aquí lo hago con los 2 tipos de querySelector
const elP1DelEjercicio1 = document.querySelector("p");
const elP2DelEjercicio1 = document.querySelectorAll("p")[1];

//className sirve, pero sobreescribe las clases que ya existieran, en este caso como sólo es 1 no afectaría
//elP1DelEjercicio1.className = "elementoDeLista";
//elP2DelEjercicio1.className = "elementoParaLista";
//mejor con classList
elP1DelEjercicio1.classList.add("elementoDeLista");
elP2DelEjercicio1.classList.add("elementoParaLista");
elP1DelEjercicio1.classList.add("elementoParaLista");
