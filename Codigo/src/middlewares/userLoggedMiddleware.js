const User=require('../models/user')
const db =require("../database/models")
const usuarios= db.User
async function userLoggedMiddleware(req,res,next){
    res.locals.isLogged=false;
    
    console.log(req.cookies.userEmail)
    /* const user= await usuarios.findAll(); 
    let usuario = user.find((oneUser) => oneUser.email == req.cookies.userEmail);*/
    if(req.cookies.userEmail){

        const usuario= await usuarios.findOne({
            where:{email:req.cookies.userEmail}
        })
        /* let userFromCookie= User.findByField('email', emailInCookies); */
        if(usuario){
            req.session.userLogged=usuario
        }
    
        if(req.session && req.session.userLogged){
            res.locals.isLogged=true;
            res.locals.userLogged=req.session.userLogged;
    
        }
    }

    next();
}
module.exports=userLoggedMiddleware 