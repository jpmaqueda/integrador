import { Card } from "./Card/Card"
import { LastProduct } from "./LastProduct/LastProduct"
import { useProduct } from '../../hooks/useProduct'
import { useUser } from '../../hooks/useUser'

export function Panel(){
    const { products, totalProduct, totalCategoria } = useProduct()
    const { total }=useUser()
    const arrayCards =[
        {
            titulo :"Total productos",
            cifra:totalProduct,
            icono:"fa-computer"
        },
        {
            titulo :"Total usuarios",
            cifra:total,
            icono:"fa-user"
        },
        {
            titulo :"Total categoria",
            cifra:totalCategoria,
            icono:"fa-folder"
        },
    ]
    return(
        <>
            <div className="row">
                {
                arrayCards.map((card, i)=><Card key={card.titulo + i} titulo={card.titulo} color={card.color} cifra={card.cifra} icono={card.icono}></Card> )  
                }
            </div>
            <div>
                {
                    products!=null
                    ? <LastProduct products={ products[products.length - 1] } />
                    : <p>caragando....</p>
                }
            </div>
        </>
    )
}