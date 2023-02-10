const fs =require('fs');
const path=require('path');
const bcryptjs=require('bcryptjs')
const cuentasFilePath = path.join(__dirname,'../data/cuentasDataBase.json');
const cuentas= JSON.parse(fs.readFileSync(cuentasFilePath,'utf-8'));
const user= require('../models/user')
const { validationResult }=require('express-validator')

const usersControllers={
    cuentas:(req,res)=>{
        res.render('cuentas',{cuentas})
    },
    
    login:(req,res)=>{
        
        res.render('login')
    },
    loginProcess:(req,res)=>{
        const userToLogin= user.findByField('email',req.body.email);

        if(userToLogin){
            let isOkThepassword=bcryptjs.compareSync(req.body.contrasena, userToLogin.contrasena)
            if(isOkThepassword){
                delete userToLogin.contrasena
                delete userToLogin.contrasena2
                req.session.userLogged=userToLogin;

                if(req.body.remember_users){
                    res.cookie('userEmail', req.body.email, { maxAge:10000000000 });
                }
                return res.redirect('/profile')
            }else{
                return res.render('login',{
                    errors:{
                        contrasena:{
                            msg:'La contraseña es incorrecta'
                        }
                    }
                })  
            }
            
        }else{
            return res.render('login',{
                errors:{
                    email:{
                        msg:'Dirección de correo electrónico inválida'
                    }
                }
            })
        }
        
    },
    
    
    register:(req,res)=>{
        
        return res.render('register')
    },
    guardarUsuario: (req,res) => {
        const resultValidation = validationResult(req);
        
        if (resultValidation.errors.length > 0) {
            return res.render('register', {
                errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

        const userInDB=user.findByField('email',req.body.email);
        
        if(userInDB){
            return res.render('register',{
                errors:{
                    email:{
                        msg:'El email "'+ req.body.email+'" ya esta registrado'
                    }
                },
                oldData:req.body
            })
        }
        const cuentas =getProductList(cuentasFilePath);
        const cuenta={
            id: cuentas.length > 0 ? cuentas[cuentas.length -1].id + 1 : 1,
            nombre: req.body.nombre,
            email: req.body.email,
            contrasena: bcryptjs.hashSync(req.body.contrasena,10),
            contrasena2: req.body.contrasena2
        }
        let userCreated =user.create(cuenta)
        return res.redirect("/login");
    },
    profile:(req,res)=>{
        
        return res.render('profile',{
            user:req.session.userLogged
        })
    },
    logout:(req,res)=>{
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/login')
    }
}
function getProductList(path) {
	return JSON.parse(fs.readFileSync(path, 'utf-8'));
}
module.exports=usersControllers;