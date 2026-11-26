import { textoMaterial, estaDisponible } from '../utils/materiales.js'

function Tarjeta({material, verDetalle, cambiarReserva}){
    return(
        <li className="tarjeta">
            <h3>{material.nombre}</h3>
            <p>Categoría: {material.categoria}</p>
            <p>Ubicación: {material.ubicacion}</p>
            <p className={estaDisponible(material) ? "disponible" : "reservado"}>
                {estaDisponible(material) ? "Disponible" : "Reservado"}
            </p>
            <button type="button" onClick={() => verDetalle(material.id)}>Ver detalle</button>
            <button type="button" onClick={() => cambiarReserva(material.id)}>
                {estaDisponible(material) ? "Reservar" : "Liberar"}
            </button>
        </li>
    )
}

function Lista({materiales, verDetalle, cambiarReserva}){
    if (materiales.length === 0) {
        return(
            <p>No hay materiales que coincidan con los filtros</p>
        )
    }

    return(
        <ul className="lista">
            {
                materiales.map((material) => {
                    return (<Tarjeta key={material.id} material={material} verDetalle={verDetalle} cambiarReserva={cambiarReserva} />)
                })
            }
        </ul>
    )
}

function Detalle({idSeleccionado, material, cerrarDetalle, cambiarReserva}){
    if (idSeleccionado === null) {
        return(
            <section className="detalle">
                <h2>Detalle</h2>
                <p>Selecciona un material para consultar sus datos</p>
            </section>
        )
    }

    if (material === undefined) {
        return(
            <section className="detalle">
                <h2>Detalle</h2>
                <p>El material seleccionado ya no existe.</p>
                <button type="button" onClick={cerrarDetalle}>Cerrar detalle</button>
            </section>
        )
    }

    return(
        <section className="detalle">
            <h2>Detalle</h2>
            <h3>{textoMaterial(material)}</h3>
            <p>Identificador: {material.id}</p>
            <p>Descripción: {material.descripcion}</p>
            <p>Categoría: {material.categoria}</p>
            <p>Ubicación: {material.ubicacion}</p>
            <p>Estado: {estaDisponible(material) ? "Disponible" : "Reservado"}</p>
            <button type="button" onClick={() => cambiarReserva(material.id)}>
                {estaDisponible(material) ? "Reservar" : "Liberar"}
            </button>
            <button type="button" onClick={cerrarDetalle}>Cerrar detalle</button>
        </section>
    )
}

export default {Lista, Detalle}
