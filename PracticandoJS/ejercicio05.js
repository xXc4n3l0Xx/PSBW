const elementos5 = document.createElement("ul");
const aviso = document.createElement("p");
let contador5 = 0;
let temporizadorAviso;

const btnNuevo = document.createElement("button");
btnNuevo.textContent = "Agregar elemento en la lista";

const btnQuitar = document.createElement("button");
btnQuitar.textContent = "Eliminar último elemento";

document.body.append(btnNuevo, btnQuitar, aviso, elementos5);


btnNuevo.addEventListener("click", function () {
  contador5 = contador5 + 1;

  const li = document.createElement("li");
  li.textContent = "Elemento #" + contador5;
  elementos5.appendChild(li);

  aviso.textContent = "Se ha agregado el Elemento "+ contador5 + " a la lista";

  clearTimeout(temporizadorAviso);
  temporizadorAviso = setTimeout(function () {
    aviso.textContent = "";
  }, 1500);
});


btnQuitar.addEventListener("click", function () {
  if (elementos5.children.length === 0) {
    aviso.textContent = "No hay elementos para quitar";

    clearTimeout(temporizadorAviso);
    temporizadorAviso = setTimeout(function () {
    aviso.textContent = "";
  }, 1500);
    return;
  }

  elementos5.lastElementChild.remove();
  
  aviso.textContent = "Se ha eliminado el Elemento "+ contador5 + " de la lista";
  contador5 = contador5 - 1;
  clearTimeout(temporizadorAviso);
  temporizadorAviso = setTimeout(function () {
    aviso.textContent = "";
  }, 1500);
});


//con este podría eliminar por posiciones
//elementos5.children[posicionSSSSSSSS]
