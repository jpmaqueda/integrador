export function Card(props){
    const {
        titulo = "Hola Mundo",
        cifra = 0,
        icono = "fa-user",
    }=props
    return(
        <div className="conteiner">
            <div>
                <div>{ titulo }</div>
                <div className="cifra">{ cifra }</div>
            </div>
            <div className="icono">
                <i className={`fas ${icono}`}></i>
            </div>
        </div>       
    )
}