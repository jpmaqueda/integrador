export function LastProduct({products}){
    
    return(
        <article className="last-article">
            <h2>Ultimo producto en la base de datos</h2>
            <ul className="last-products">
                <img src={products.imagen} alt="" />
                <li key={products.id} className="last-articulo">
                    <h3>{products.name}</h3>
                    <p className="descripcion">{products.descripcion}</p>
                    <div>
                        <p><strong>Categoria:</strong> {products.categoria}</p>
                        <p><strong>Material:</strong> {products.material}</p>
                    </div>
                </li>
            </ul>
        </article>
        
    )
}