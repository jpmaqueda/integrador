function ListOfProducts({products}){
    return(
        <ul className="products">
           { 
            products.map(producto =>(
                <article className="article" key={producto.id}>
                    <li  className="articulo">
                        <div className="img-prod">
                            <img  src={producto.imagen} alt="" />
                        </div>
                        <h3>{producto.name}</h3>
                        <p className="descripcion">{producto.descripcion}</p>
                        <div>
                            <p><strong>Categoria:</strong> {producto.categoria}</p>
                            <p><strong>Material:</strong> {producto.material}</p>
                        </div>
                    </li>
                </article>
            ))
            }
        </ul>
    )
}
function  NoProductResult(){
    return(
        <p>No se encontraron los productos</p>
    )
}
export function Product({products}){
    const hasProducts = products?.length > 0
    return(
        hasProducts
        ?<ListOfProducts products={products}/>
        :<NoProductResult />
    )
}