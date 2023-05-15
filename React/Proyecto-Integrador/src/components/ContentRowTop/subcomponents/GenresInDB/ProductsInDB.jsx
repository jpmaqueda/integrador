import React, { useEffect, useState } from "react";
import GenreCard from "../../../GenreCard/GenreCard";

function ProductsInDB(){
        const [data, setData]=useState(null)
        useEffect(()=>{
            const fetchData = async()=>{
                try{
                    const response= await fetch('http://localhost:3000/api/products')
                    const jsonData= await response.json()
                    setData(jsonData)
                }catch (error) {
                    console.error(error);
                }
            }
            fetchData()
            
        },[])
    
        return (
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Products in Data Base</h5>
                    </div>
                    <div className={`card-body`}>
                        <div className="row">
                            {
                             <GenreCard key={data} name={data.products.name} />
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    
}

export default ProductsInDB;