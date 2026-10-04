//creamos el arreglo de objetos

const tecnos = [
  { nombre: "HTML", descr: "Lenguaje utilizado para estructurar el contenido de una página web", tipo: "Lenguaje de marcado"},
  { nombre: "CSS", descr: "Permite diseñar y dar estilo a las páginas web", tipo: "Lenguaje de estilos"},
  { nombre: "JavaScript", descr: "(Tambien conocido como Java) Añade interactividad y funciones dinámicas a las páginas", tipo: "Lenguaje de programación"},
  { nombre: "React", descr: "Biblioteca para crear interfaces dinámicas y componentes reutilizables", tipo: "Biblioteca de JavaScript"},
  { nombre: "Node", descr: "Entorno que permite ejecutar JS en el servidor para desarrollar apps web", tipo: "Entorno de ejecución"}
];

//creamos nuestra seccion para insertar las tarjetas
const tarjetas = document.createElement("section");
document.body.append(tarjetas);

/*
así lo hice primero, a cada elemento de nuestro arreglo le aplicamos sus cambios y creamos sus partes

for (const tecnologia of tecnos){
    const tecnoEjem = document.createElement("div");
    
    const nombre = document.createElement("h4");
    nombre.textContent = tecnologia.nombre;

    const descrip = document.createElement("p");
    descrip.textContent = tecnologia.descr;

    const tip = document.createElement("small");
    tip.textContent = tecnologia.tipo;

    tecnoEjem.append(nombre, descrip, tip);

    tecnoEjem.style.border = "1px dashed gray";
    tecnoEjem.style.padding = "8px";
    tecnoEjem.style.marginBottom = "12px";

    tarjetas.append(tecnoEjem);
}
*/

//para usarlo en el 7 lo tuve que meter en la función
function dibujarTarjetas(arreglo) {
    tarjetas.innerHTML = "";

    for (const tecnologia of arreglo) {
        const tecnoEjem = document.createElement("div");

        const nombre = document.createElement("h4");
        nombre.textContent = tecnologia.nombre;

        const descrip = document.createElement("p");
        descrip.textContent = tecnologia.descr;

        const tip = document.createElement("small");
        tip.textContent = tecnologia.tipo;

        tecnoEjem.append(nombre, descrip, tip);

        tecnoEjem.style.border = "2px dashed gray";
        tecnoEjem.style.padding = "8px";
        tecnoEjem.style.marginBottom = "12px";

        tarjetas.append(tecnoEjem);
    }
}

dibujarTarjetas(tecnos);