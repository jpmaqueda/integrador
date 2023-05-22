const db = require('../../database/models');
const PRODUCTS=db.Product;
const CATEGORIES=db.Category
const RUTA_API='https://el-portal.onrender.com'
module.exports ={
    'list': async(req, res)=>{
        let productos = await PRODUCTS.findAll({
            include:['category','material']
        })
        let categorias=await CATEGORIES.findAll({
            include:['categories']
        })
        let producto =productos.map(producto => {
            return({
                id:producto.id,
                name:producto.nombre,
                descripcion:producto.descripcion,
                imagen:RUTA_API + "/imagenes/productos/" + producto.imagen,
                relaciones:[{
                    categoria:producto.category.nombre,
                    material:producto.material.nombre
                }],
                url:'/api/products/'+producto.id
                
            })
        })
        let categoria = categorias.map(element=>{
            return ({
                categoria:element.nombre,
                product:element.categories.length
            })
        })
        let resultado ={
            meta:{
                count:productos.length,
                countByCategory:categoria
            },
            products:producto
        }
        res.json(resultado)
    },
    'detail' : async (req, res) => {
        let id =req.params.id;
        let produto = await PRODUCTS.findByPk(id,{
            include:['category','material']
        })

        res.json(produto)
    }
}