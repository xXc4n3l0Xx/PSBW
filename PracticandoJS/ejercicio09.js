const CLAVE_TECNOS = "tecnologiasGuardadas";
const tecnosIniciales = [...tecnos];

function guardarTecnos() {
  const texto = JSON.stringify(tecnos);
  localStorage.setItem(CLAVE_TECNOS, texto);
}

function cargarTecnos() {
  const texto = localStorage.getItem(CLAVE_TECNOS);

  if (texto !== null) {
    const datos = JSON.parse(texto);
    tecnos.length = 0;
    for (const dato of datos) {
      tecnos.push(dato);
    }
  }

  dibujarTarjetas(tecnos);
}

const btnBorrar9 = document.createElement("button");
btnBorrar9.textContent = "Borrar datos guardados";
document.body.insertBefore(btnBorrar9, tarjetas);

btnBorrar9.addEventListener("click", function () {
  localStorage.removeItem(CLAVE_TECNOS);

  tecnos.length = 0;
  for (const tecno of tecnosIniciales) {
    tecnos.push(tecno);
  }

  buscarTecnologia.value = "";
  dibujarTarjetas(tecnos);
});

cargarTecnos();