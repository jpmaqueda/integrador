const fs =require('fs');
const path=require('path');

const cuentasFilePath = path.join(__dirname,'../data/cuentasDataBase.json');
const cuentas= JSON.parse(fs.readFileSync(cuentasFilePath,'utf-8'));
const { validationResult }=require('express-validator')

const usersControllers={
    register:(req,res)=> res.render('register'),
    login:(req,res)=>res.render('login'),
    cuentas:(req,res)=>{
        res.render('cuentas',{cuentas})
    },

    guardarUsuario: (req,res) => {
        const cuentas =getProductList(cuentasFilePath);
        
        const cuenta={
            id: cuentas.length > 0 ? cuentas[cuentas.length -1].id + 1 : 1,
            nombre: req.body.nombre,
            email: req.body.email,
            contrasena: req.body.contrasena,
            contrasena2: req.body.contrasena2
        }

        const resultValidation = validationResult(req);
        
        if (resultValidation.errors.length > 0) {
			return res.render('register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}
        
        cuentas.push(cuenta)
        
        fs.writeFileSync(cuentasFilePath, JSON.stringify(cuentas, null, 2));
        return res.redirect("/cuentas");
    }
}
function getProductList(path) {
	return JSON.parse(fs.readFileSync(path, 'utf-8'));
}
module.exports=usersControllers;