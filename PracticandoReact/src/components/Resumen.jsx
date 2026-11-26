function Resumen({total, disponibles, reservados, resultados}){
    return(
        <div className="resumen">
            <span>Registrados: {total}</span>
            <span>Disponibles: {disponibles}</span>
            <span>Reservados: {reservados}</span>
            <span>Resultados: {resultados}</span>
            <p>{resultados === total ? "Se muestran todos los materiales." : "Se muestran " + resultados + " de " + total + " materiales."}</p>
            {disponibles === 0 && <p className="aviso">No hay materiales disponibles por ahora.</p>}
        </div>
    )
}

export default Resumen
