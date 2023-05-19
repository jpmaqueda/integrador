export function Card(props){
    const {
        titulo = "Hola Mundo",
        cifra = 0,
        icono = "fa-user",
    }=props
    return(
        <div>
            <div>
                <div>
                    <div>{ titulo }</div>
                    <div>{ cifra }</div>
                </div>
                <div>
                    <i className={`fas ${icono}`}></i>
                </div>
            </div> 
        </div>       
    )
}