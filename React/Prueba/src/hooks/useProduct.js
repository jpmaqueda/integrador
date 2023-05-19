import { useEffect, useState } from 'react'
/* import withResult from '../mocks/with-results.json' */
export function useProduct() {
    const [responseProducts, setResponseProducts]= useState([])
    const [totalProd, setTotalProd]=useState()
    const [totalcateg, setTotalcateg]=useState()
    const products = responseProducts.products    
    const totalProduct = totalProd
    const totalCategoria = totalcateg
    
    const API_PRODUCT='http://localhost:3000/api/products'
    useEffect(()=>{
        fetch(API_PRODUCT)
        .then(res=> res.json())
        .then(json=>{
            setResponseProducts(json)
            setTotalProd(json.meta.count)
            setTotalcateg(json.meta.countByCategory.length)
        })
    },[ API_PRODUCT ])
    
    
    
    const mappedProducts = products?.map(producto =>({
        id: producto.id,
        name:producto.name,
        descripcion:producto.descripcion,
        imagen:producto.imagen,
        categoria:producto.relaciones[0].categoria,
        material:producto.relaciones[0].material
        
    }))
    
    return{products: mappedProducts, totalProduct, totalCategoria}
}