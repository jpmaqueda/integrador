//1. Guardar al usuario 
//2. Buscar al usuario que se quiere loguear por su mail 
//3. Buscar a un usuario por su id
//4. Editar la informacion de un usuario
//5. Eliminar a un usuario de la DB
const fs = require('fs');
const path=require('path');
const User ={
    filename:path.resolve(__dirname,'../data/cuentasDataBase.json'),
    
    getData: function (){
        return JSON.parse(fs.readFileSync(this.filename, 'utf-8'))
    },

    findAll:function(){
        return this.getData();
    },

    findByPk: function (id){
        let allUsers = this.findAll();
        let userFound = allUsers.find((oneUser) => oneUser.id == id);
        return userFound
    },
    findByField: function (Field,text){
        let allUsers = this.findAll();
        let userFound = allUsers.find((oneUser) => oneUser[Field] == text);
        return userFound
    },
    create: function(userData){
        let allUsers=this.findAll();
        allUsers.push(userData);
        fs.writeFileSync(this.filename,JSON.stringify(allUsers, null, 2));
        return userData;
    },

}
module.exports=User;
