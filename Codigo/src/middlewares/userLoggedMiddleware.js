const User=require('../models/user')
function userLoggedMiddleware(req,res,next){
    res.locals.isLogged=false;
    
    let emailInCookies=req.cookies.userEmail
    let userFromCookie= User.findByField('email', emailInCookies);
    
    if(userFromCookie){
        req.session.userLogged=userFromCookie
    }

    if(req.session && req.session.userLogged){
        res.locals.isLogged=true;
        res.locals.userLogged=req.session.userLogged;

    }

    next();
}
module.exports=userLoggedMiddleware 