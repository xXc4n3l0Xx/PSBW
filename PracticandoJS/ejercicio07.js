const formulario7 = document.createElement("div");

const inputNombre7 = document.createElement("input");
inputNombre7.placeholder = "Nombre";

const inputDescr7 = document.createElement("textarea");
inputDescr7.placeholder = "Descripción";
inputDescr7.style.verticalAlign = "middle";

const selectTipo7 = document.createElement("select");
const tipos7 = ["", "Lenguaje de marcado", "Lenguaje de estilos", "Lenguaje de programación", "Biblioteca de JavaScript", "Entorno de ejecución", "Otro"];

for (const tipo7 of tipos7) {
    const opcion7 = document.createElement("option");
    opcion7.value = tipo7;
    if (tipo7 === "") {
        opcion7.textContent = "Elige un tipo";
        opcion7.disabled = true;
        opcion7.selected = true;
        opcion7.hidden = true;
    } else {
        opcion7.textContent = tipo7;
    }
    selectTipo7.append(opcion7);
}

const btnAgregar7 = document.createElement("button");
btnAgregar7.textContent = "Agregar tecnología";

const mensaje7 = document.createElement("p");

formulario7.append(inputNombre7, inputDescr7, selectTipo7, btnAgregar7, mensaje7);
document.body.append(formulario7);

btnAgregar7.addEventListener("click", function () {
    const nombre = inputNombre7.value.trim();
    const descr = inputDescr7.value.trim();
    const tipo = selectTipo7.value;

    const faltantes = [];

    if (nombre === "") {
        faltantes.push("nombre");
    }
    if (descr === "") {
        faltantes.push("descripción");
    }
    if (tipo === "") {
        faltantes.push("tipo");
    }

    if (faltantes.length > 0) {
        mensaje7.textContent = "Falta llenar: " + faltantes.join(", ") + ".";
        mensaje7.style.color = "red";
        return;
    }

    tecnos.push({ nombre: nombre, descr: descr, tipo: tipo });
    guardarTecnos();
    buscarTecnologia.value = "";
    dibujarTarjetas(tecnos);

    mensaje7.textContent = "Tecnología agregada.";
    mensaje7.style.color = "green";

    inputNombre7.value = "";
    inputDescr7.value = "";
    selectTipo7.value = "";
});