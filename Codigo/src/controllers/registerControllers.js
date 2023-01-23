const registerControllers={
    register:(req,res)=> res.render('register'),
    login:(req,res)=>res.render('login'),

    guardarUsuario:(req,res)=>{
       
        
        console.log(req.body);
    }
}
module.exports=registerControllers;