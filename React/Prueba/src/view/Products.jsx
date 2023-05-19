import { useProduct } from '../hooks/useProduct'
import { Product } from '../components/Product/Product'

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
        <div style={{width:'100%'}}>
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
