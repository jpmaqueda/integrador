import { useProduct } from '../hooks/useProduct'
import { Product } from '../components/Product/Product'
import { LastProduct } from "../components/Panel/LastProduct/LastProduct"

export function Products(){
    const { products } = useProduct()


    const handleSubmit =(e)=>{
        e.preventDefault()
    }
    const handleChange = (e)=>{
        const newInput_bucar= e.target.value.toLowerCase()
        document.querySelectorAll(".article").forEach(product=>{
            product.textContent.toLowerCase().includes(newInput_bucar)
            ? product.classList.remove("filtro")
            : product.classList.add("filtro")
        })
    }
    
    return(
        <div className='allProducts'>
            <div className='lastProduct'>
                {
                    products!=null
                    ? <LastProduct products={ products[products.length - 1] } />
                    : <svg viewBox="25 25 50 50">
                        <circle r="20" cy="50" cx="50"></circle>
                      </svg>
                }
            </div>
            <main className="main-buscador">
                <h2>buscador de productos</h2>
                <form action="" className="form-productos" onSubmit={handleSubmit}>
                    <input onKeyUp={handleChange}  type="text" name="input_bucar"/>
                    <button  type="submit">buscar</button>
                </form>
                <section className='todosLosProductos'>
                      <Product products={products}/>                  
                </section>
            </main>
        </div>
    )
}
