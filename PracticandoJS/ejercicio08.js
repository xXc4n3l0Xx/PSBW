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


/*
Utilizando las tecnologías almacenadas en la página, agrega un campo “Buscar tecnología”
Mientras el usuario escribe, deberán mostrarse únicamente las tecnologías cuyo nombre coincida parcial o totalmente con la búsqueda
Por ejemplo, escribir “Java” podría mostrar JavaScript y Java
La búsqueda deberá actualizarse mientras el usuario escribe, sin necesidad de recargar la página
*/