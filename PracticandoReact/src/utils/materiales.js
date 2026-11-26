export function textoMaterial(material){
    return material.nombre + " (" + material.ubicacion + ")"
}

export const estaDisponible = (material) => !material.reservado

export const normalizarTexto = (texto) => {
    return texto.trim().toLowerCase()
}
