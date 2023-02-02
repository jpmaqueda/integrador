const fs = require(`fs`)
const path = require(`path`)
const filepath = path.join(__dirname, "../data/productsDataBase.json")

const productslectura = JSON.parse(fs.readFileSync(filepath, `utf-8`))

const pcControllers={
    create:(req,res)=> res.render('productcreation'),
    edit: (req, res) => res.render("productedit"),
    detail:(req,res)=> res.render('productDetail'),
    cart:(req,res)=> res.render('shoppingCart'),
    productadmin:(req,res)=> res.render('productsadmin', {productslectura}),
    store:(req,res)=> {
        const productregister=getProductList(filepath) // esto sirve para para mostrar el json creado sin tener que hacer refresh//
        const datosproducto={
            id: productregister.length > 0 ? productregister[productregister.length -1].id + 1 : 1,
            nombre: req.body.nombre,
            precio: req.body.precio,
            stock: req.body.stock,
            color: req.body.color,
            altura: req.body.altura,
            profundidad: req.body.profundidad,
            anchura: req.body.anchura,
            img:req.file?.filename ? req.file.filename:"default image"
            }
            productregister.push(datosproducto)
         
            fs.writeFileSync(filepath, JSON.stringify(productregister, null, 2));
            return res.redirect("/productsadmin")

        
    }

    
}
function getProductList(path) {
	return JSON.parse(fs.readFileSync(path, 'utf-8'));
}

module.exports=pcControllers