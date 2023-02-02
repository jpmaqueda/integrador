const fs = require(`fs`)
const path = require(`path`)
const filepath = path.join(__dirname, "../data/productsDataBase.json")

const productslectura = JSON.parse(fs.readFileSync(filepath, `utf-8`))

const pcControllers={
    create:(req,res)=> res.render('productcreation'),
    detail:(req,res)=> res.render('productDetail'),
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
        
    }
}
function getProductList(path) {
	return JSON.parse(fs.readFileSync(path, 'utf-8'));
}

module.exports=pcControllers