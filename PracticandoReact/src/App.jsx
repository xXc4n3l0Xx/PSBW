import { useState, useEffect } from 'react'
import './App.css'
import materialesIniciales from './data/materiales.js'
import { estaDisponible, normalizarTexto } from './utils/materiales.js'
import Encabezado from './components/Encabezado.jsx'
import FormularioMaterial from './components/FormularioMaterial.jsx'
import Filtros from './components/Filtros.jsx'
import Resumen from './components/Resumen.jsx'
import Material from './components/Material.jsx'

const CLAVE_MATERIALES = "materialesGuardados"

function cargarMateriales(){
    const texto = localStorage.getItem(CLAVE_MATERIALES)

    if (texto !== null) {
        return JSON.parse(texto)
    }

    return materialesIniciales
}

function App() {
    const [materiales, setMateriales] = useState(cargarMateriales)
    const [busqueda, setBusqueda] = useState("")
    const [categoria, setCategoria] = useState("Todas")
    const [soloDisponibles, setSoloDisponibles] = useState(false)
    const [idSeleccionado, setIdSeleccionado] = useState(null)
    const [mensaje, setMensaje] = useState({texto: "", color: ""})

    useEffect(() => {
        localStorage.setItem(CLAVE_MATERIALES, JSON.stringify(materiales))
    }, [materiales])

    function agregarMaterial(nuevo){
        setMateriales([...materiales, nuevo])
    }

    function cambiarReserva(id){
        const nuevosMateriales = materiales.map((material) => {
            if (material.id === id) {
                return {...material, reservado: !material.reservado}
            }
            return material
        })

        setMateriales(nuevosMateriales)
    }

    function limpiarFiltros(){
        setBusqueda("")
        setCategoria("Todas")
        setSoloDisponibles(false)
    }

    function restablecer(){
        setMateriales(materialesIniciales)
        setIdSeleccionado(null)
        setMensaje({texto: "", color: ""})
        limpiarFiltros()
    }

    const textoBusqueda = normalizarTexto(busqueda)

    const filtrados = materiales.filter((material) => {
        const coincideNombre = normalizarTexto(material.nombre).includes(textoBusqueda)
        const coincideCategoria = categoria === "Todas" || material.categoria === categoria
        const coincideDisponible = !soloDisponibles || estaDisponible(material)
        return coincideNombre && coincideCategoria && coincideDisponible
    })

    const seleccionado = materiales.find((material) => material.id === idSeleccionado)

    const disponibles = materiales.filter(estaDisponible).length

    return (
        <>
            <Encabezado />
            <main>
                <div className="columna">
                    <FormularioMaterial materiales={materiales} agregarMaterial={agregarMaterial} mensaje={mensaje} cambiarMensaje={setMensaje} />
                    <Material.Detalle idSeleccionado={idSeleccionado} material={seleccionado} cerrarDetalle={() => setIdSeleccionado(null)} cambiarReserva={cambiarReserva} />
                    <button type="button" onClick={restablecer}>Restablecer datos iniciales</button>
                </div>
                <div className="columna">
                    <h2>Materiales</h2>
                    <Filtros busqueda={busqueda} categoria={categoria} soloDisponibles={soloDisponibles} cambiarBusqueda={setBusqueda} cambiarCategoria={setCategoria} cambiarSoloDisponibles={setSoloDisponibles} limpiarFiltros={limpiarFiltros} />
                    <Resumen total={materiales.length} disponibles={disponibles} reservados={materiales.length - disponibles} resultados={filtrados.length} />
                    <Material.Lista materiales={filtrados} verDetalle={setIdSeleccionado} cambiarReserva={cambiarReserva} />
                </div>
            </main>
        </>
    )
}

export default App
