const fs = require(`fs`)
const path = require(`path`)
const filepath = path.join(__dirname, "../data/productsDataBase.json")

const productslectura = JSON.parse(fs.readFileSync(filepath, `utf-8`))


const indexControllers={
    index:(req,res)=>{ 
        res.render('index',{productslectura});
    }
}

module.exports=indexControllers