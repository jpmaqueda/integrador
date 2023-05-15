const db =require('../../database/models')
const USERS = db.User

module.exports={
    'list':async(req, res)=>{
        let usuarios=await USERS.findAll()
        let usuario = usuarios.map((element) => {
            return({
                id:element.id,
                name:element.nombre,
                email:element.email,
                url:'/api/users/'+ element.id
            })
            
        })
        let respuesta={
            meta:{
                count:usuarios.length,            
                url:'/api/users',

            },
            user:usuario
        }
        return res.json(respuesta)
    },
    'detail': async(req,res)=>{
        let id=req.params.id
        let usuario=await USERS.findByPk(id)
        let respuesta ={
            meta:{
                url:'/api/users/'+ usuario.id
            },
            user:{
                id :usuario.id,
                name:usuario.nombre,
                email:usuario.email,
                rol:usuario.email,
                direccion:usuario.direccion,
                tel:usuario.numero,
                createAt:usuario.createdAt
            }
        }
        return res.json(respuesta)
    }
}