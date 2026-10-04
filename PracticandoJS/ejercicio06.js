const panelInteractivo = document.createElement("section");
const tituloPanel = document.createElement("h2");
tituloPanel.textContent = "Panel Interactivo";
panelInteractivo.append(tituloPanel);
document.body.append(panelInteractivo);



const cuadro = document.createElement("div");
cuadro.textContent = "Pasa el mouse por aquí";
cuadro.style.padding = "20px";
cuadro.style.border = "1px solid black";
panelInteractivo.append(cuadro);

cuadro.addEventListener("mouseover", function () {
  cuadro.style.backgroundColor = "lightyellow";
});

cuadro.addEventListener("mouseout", function () {
  cuadro.style.backgroundColor = "";
});



const btnOcultar = document.createElement("button");
btnOcultar.textContent = "Ocultar / mostrar cuadro";
panelInteractivo.append(btnOcultar);

btnOcultar.addEventListener("click", function () {
  if (cuadro.style.display === "none") {
    cuadro.style.display = "block";
  } else {
    cuadro.style.display = "none";
  }
});



const campoEco = document.createElement("input");
campoEco.placeholder = "Escribe algo";
const eco = document.createElement("p");
panelInteractivo.append(campoEco, eco);

campoEco.addEventListener("input", function () {
  eco.textContent = "Escribiste: " + campoEco.value;
});