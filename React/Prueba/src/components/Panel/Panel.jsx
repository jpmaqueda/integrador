import { Card } from "./Card/Card"
import { useProduct } from '../../hooks/useProduct'
import { useUser } from '../../hooks/useUser'

export function Panel(){
    const { totalProduct, totalCategoria } = useProduct()
    const { total }=useUser()
    const arrayCards =[
        {
            titulo :"Total productos",
            cifra:totalProduct,
            icono:"fa-cart-shopping"
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
            
        </>
    )
}