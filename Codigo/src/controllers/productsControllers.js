const pcControllers={
    create:(req,res)=> res.render('productcreation'),
    edit: (req, res) => res.render("productedit"),
    detail:(req,res)=> res.render('productDetail'),
    cart:(req,res)=> res.render('shoppingCart')

    
}

module.exports=pcControllers