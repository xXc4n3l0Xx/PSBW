import { categorias } from '../data/materiales.js'

function Filtros({busqueda, categoria, soloDisponibles, cambiarBusqueda, cambiarCategoria, cambiarSoloDisponibles, limpiarFiltros}){
    return(
        <div className="filtros">
            <label htmlFor="buscar">Buscar</label>
            <input id="buscar" type="search" placeholder="Nombre del material" value={busqueda} onChange={(event) => cambiarBusqueda(event.target.value)} />

            <label htmlFor="filtroCategoria">Categoría</label>
            <select id="filtroCategoria" value={categoria} onChange={(event) => cambiarCategoria(event.target.value)}>
                <option value="Todas">Todas</option>
                {
                    categorias.map((cat) => {
                        return (<option key={cat} value={cat}>{cat}</option>)
                    })
                }
            </select>

            <label>
                <input type="checkbox" checked={soloDisponibles} onChange={(event) => cambiarSoloDisponibles(event.target.checked)} />
                Solo disponibles
            </label>

            <button type="button" onClick={limpiarFiltros}>Limpiar filtros</button>
        </div>
    )
}

export default Filtros
