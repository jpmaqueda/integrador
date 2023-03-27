const db =require("../database/models");
const product=db.Product;
/* const fs = require('fs')
const path = require(`path`)
const filepath = path.join(__dirname, "../data/productsDataBase.json")

const productslectura = JSON.parse(fs.readFileSync(filepath, `utf-8`))
const pcControllers={
    create:(req,res)=> res.render('productcreation'),
    detail:(req,res)=> {
        const id=req.params.id;
        const product= productslectura.find(product=>product.id==id);
        res.render('productDetail',{product})
    },
    
    cart:(req,res)=> res.render('shoppingCart'),
    productadmin:(req,res)=> res.render('productsadmin', {productslectura}),
    store:(req,res)=> {
        const productregister=getProductList(filepath) // esto sirve para para mostrar el json creado sin tener que hacer refresh//
        const datosproducto={
            id: productregister.length > 0 ? productregister[productregister.length -1].id + 1 : 1,
            nombre: req.body.nombre,
            precio: Number(req.body.precio),
            stock: Number(req.body.stock),
            color: req.body.color,
            altura: Number(req.body.altura),
            profundidad: Number(req.body.profundidad),
            anchura: Number(req.body.anchura),
            img:req.file?.filename ? req.file.filename:"default image",
            categoria: req.body.categoria, 
            subcategoria: req.body.subcategoria,
            descripcion: req.body.descripcion,
            
        }
        productregister.push(datosproducto)
        
        fs.writeFileSync(filepath, JSON.stringify(productregister, null, 2));
        return res.redirect("/productsadmin")
        
    },
    edit: (req, res) =>{
        const id=req.params.id;
        const product= productslectura.find(product=>product.id==id); 
        res.render("productedit",{product});
    },
    update:(req,res)=>{
        const id=Number(req.params.id);
        
        const product= productslectura.find(product=>{
            if(product.id==id){
                return product
            }
        });
        
        const datosproducto = {
            id,
            ...req.body,
            img:req.file?.filename ? req.file.filename : product.img

        }
        guardarProducto(datosproducto)
        return res.redirect('/productsadmin')
    },
    delete:(req,res)=>{
        
        eliminarProducto(req.params.id)
        res.redirect('/productsadmin')
    }


}
function getProductList(path) {
	return JSON.parse(fs.readFileSync(path, 'utf-8'));
}

function guardarProducto(productToStore) {

	const products = getProductList(filepath);

	const productList = products.map(prod => {
		if(prod.id == productToStore.id) {
			return productToStore
		}
		return prod;
	});

	fs.writeFileSync(filepath, JSON.stringify(productList, null, 2));
}
function eliminarProducto(id) {
	let products = getProductList(filepath);

	products = products.filter( product => product.id != id);
    

	fs.writeFileSync(filepath, JSON.stringify(products, null, 2));
}
module.exports=pcControllers */
module.exports={
    detail:async(req,res)=>{
        let producto= await product.findByPk(req.params.id,
        {
            include:["material","category"],
        })
        /* return res.json({producto}) */
        return res.render("productDetail",{product:producto})
    },
    create:async(req,res)=>{
        let producto= await product.create({
            ...req.body,
            img:req.file?.filename ? req.file.filename:"default image"
        })
        return res.redirect("/")
    },
    store:async()=>{},
    edit:async()=>{},
    update:async()=>{},
    cart:async()=>{},
    productadmin:async()=>{},
    delete:async()=>{},
}