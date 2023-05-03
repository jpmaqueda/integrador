const fs =require('fs');
const path=require('path');
const bcryptjs=require('bcryptjs')
const { validationResult }=require('express-validator')
const db =require("../database/models")
const usuarios=db.User;
/* const user= require('../models/user')
const cuentas= JSON.parse(fs.readFileSync(cuentasFilePath,'utf-8'));
const cuentasFilePath = path.join(__dirname,'../data/cuentasDataBase.json');
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
            contrasena: bcryptjs.hashSync(req.body.contrasena, 10),
            contrasena2: bcryptjs.hashSync(req.body.contrasena2, 10)
        }
        const contrasena = req.body.contrasena;
        const contrasena2 = req.body.contrasena2;
        if(contrasena2 != contrasena){
            return res.render("register",{
                errors:{
                    contrasena2:{
                        msg:"Las contraseñas no son iguales"
                    }
                }})
        }
        user.create(cuenta)
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
module.exports=usersControllers; */
module.exports={
    register:async(req,res)=>{
        res.render("register");
    },
    guardarUsuario:async(req,res)=>{
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('register', {
                errors: resultValidation.mapped(),
				oldData: req.body
			});
		}
        let encontrarUser= await usuarios.findAll();
        let user = encontrarUser.find(user =>{return user.email===req.body.email})
        /* return res.json({user}) */
        if(user){
            return res.render('register',{
                errors:{
                    email:{
                        msg:'El email "'+ req.body.email+'" ya esta registrado'
                    }
                },
                oldData:req.body
            })
        }
        
        const contrasena = req.body.contrasena;
        const contrasena2 = req.body.contrasena2;
        if(contrasena2 != contrasena){
            return res.render("register",{
                errors:{
                    contrasena2:{
                        msg:"Las contraseñas no son iguales"
                    }
                }})
        }
        await usuarios.create({
            ...req.body,
            contrasena: bcryptjs.hashSync(req.body.contrasena, 10),

        })
        .catch(error => res.send(error))
        /* user.create(cuenta) */
        return res.redirect("/login");
        
    },
    cuentas:async(req,res)=>{
        let users=await usuarios.findAll();
        
        
        return res.render("cuentas",{cuentas:users})
    },
    cuentaDetail:async(req,res)=>{
        let id= req.params.id;
        let user=await usuarios.findByPk(id);
        return res.render("cuentasEdit",{user})
    },
    cuentaEdit:async(req,res)=>{
        let id =req.params.id;
        await usuarios.update({
            ...req.body
        },{where:{id:id}})
        res.redirect("/cuentas")
    },
    login:async(req,res)=>{
        res.render("login");
    },
    loginProcess:async(req,res)=>{
        let user= await usuarios.findAll();
        let usuario=user.find((oneUser) => oneUser.email == req.body.email);
        if(usuario){
            let isOkThepassword = bcryptjs.compareSync(req.body.contrasena, usuario.contrasena);
            if(isOkThepassword){
                delete usuario.contrasena
                delete usuario.contrasena2
                req.session.userLogged=usuario;

                if(req.body.remember_users){
                    res.cookie('userEmail', req.body.email, { maxAge:90000000, httpOnly: true });
                }
                return res.redirect('/')
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
                        msg:'Correo electrónico inválido'
                    }
                }
            })
        }
    },
    profileEdit:async(req,res)=>{
        let id =req.params.id;
        await usuarios.update({
            ...req.body,
            numero:req.body.numero != 0 ? req.body.numero : null
        },{where:{id:id}})
        res.redirect("/profile")
    },
    logout:async(req,res)=>{
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/')
    },
    profile:async(req,res)=>{
        let usuario =await usuarios.findAll();
        let user=usuario.find((oneUser) => oneUser.email == req.session.userLogged.email);
        /* return res.json({user}) */
        return res.render('profile',{user})
    },
    delete:async(req,res)=>{
        let id =req.params.id;
        await usuarios.destroy({where:{id:id}})
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect("/")
    }
    
}