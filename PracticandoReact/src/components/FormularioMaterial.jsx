import { useState } from 'react'
import { categorias } from '../data/materiales.js'
import { textoMaterial, normalizarTexto } from '../utils/materiales.js'

function FormularioMaterial({materiales, agregarMaterial, mensaje, cambiarMensaje}){
    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [categoria, setCategoria] = useState("")
    const [ubicacion, setUbicacion] = useState("")

    function registrar(event){
        event.preventDefault()

        const faltantes = []

        if (nombre.trim() === "") {
            faltantes.push("nombre")
        }
        if (descripcion.trim() === "") {
            faltantes.push("descripción")
        }
        if (categoria === "") {
            faltantes.push("categoría")
        }
        if (ubicacion.trim() === "") {
            faltantes.push("ubicación")
        }

        if (faltantes.length > 0) {
            cambiarMensaje({texto: "Falta llenar: " + faltantes.join(", ") + ".", color: "red"})
            return
        }

        const repetido = materiales.find((material) => {
            return normalizarTexto(material.nombre) === normalizarTexto(nombre) && normalizarTexto(material.ubicacion) === normalizarTexto(ubicacion)
        })

        if (repetido !== undefined) {
            cambiarMensaje({texto: "Ya existe " + textoMaterial(repetido) + ".", color: "red"})
            return
        }

        const nuevo = {
            id: "mat-" + Date.now(),
            nombre: nombre.trim(),
            descripcion: descripcion.trim(),
            categoria: categoria,
            ubicacion: ubicacion.trim(),
            reservado: false
        }

        agregarMaterial(nuevo)
        cambiarMensaje({texto: "Se registró " + textoMaterial(nuevo) + ".", color: "green"})

        setNombre("")
        setDescripcion("")
        setCategoria("")
        setUbicacion("")
    }

    return(
        <form onSubmit={registrar}>
            <h2>Registrar material</h2>
            <label htmlFor="nombre">Nombre</label>
            <input id="nombre" value={nombre} onChange={(event) => setNombre(event.target.value)} />

            <label htmlFor="descripcion">Descripción</label>
            <textarea id="descripcion" value={descripcion} onChange={(event) => setDescripcion(event.target.value)} />

            <label htmlFor="categoria">Categoría</label>
            <select id="categoria" value={categoria} onChange={(event) => setCategoria(event.target.value)}>
                <option value="" disabled hidden>Elige una categoría</option>
                {
                    categorias.map((cat) => {
                        return (<option key={cat} value={cat}>{cat}</option>)
                    })
                }
            </select>

            <label htmlFor="ubicacion">Ubicación</label>
            <input id="ubicacion" value={ubicacion} onChange={(event) => setUbicacion(event.target.value)} />

            <button type="submit">Registrar</button>
            <p style={{color: mensaje.color}}>{mensaje.texto}</p>
        </form>
    )
}

export default FormularioMaterial
