const buscarTecnologia = document.createElement("input");
buscarTecnologia.placeholder = "Buscar tecnología";
document.body.insertBefore(buscarTecnologia, tarjetas);

buscarTecnologia.addEventListener("input", function () {
  const texto = buscarTecnologia.value.toLowerCase();

  const coincidencias = tecnos.filter(function (t) {
    return t.nombre.toLowerCase().includes(texto);
  });

  dibujarTarjetas(coincidencias);
});
