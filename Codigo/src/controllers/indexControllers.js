const db = require("../database/models")
const product= db.Product

/*const fs = require(`fs`)
const path = require(`path`)
 const filepath = path.join(__dirname, "../data/productsDataBase.json")



const productslectura = JSON.parse(fs.readFileSync(filepath, `utf-8`))


const indexControllers={
    index:(req,res)=>{ 
        res.render('index',{productslectura});
    }
}

module.exports=indexControllers */
module.exports={
    index: async (req,res)=>{
        let productos = await product.findAll({
            include:[{
                association:"category"
            }]
        })
         /* return res.json({productos}) */
        return res.render('index',{productslectura:productos});
    }
}