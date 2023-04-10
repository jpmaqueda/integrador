module.exports=(sequelize,dataTypes)=>{
    let alias="User";
    let cols={
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        nombre:dataTypes.STRING,
        email:dataTypes.STRING,
        contrasena:dataTypes.STRING,
        rol:dataTypes.INTEGER,
        direccion:dataTypes.STRING,
        numero:dataTypes.INTEGER,
        createdAt:dataTypes.DATE,
        updatedAt:dataTypes.DATE
        

    }
    let config={
        timestamps:true,
        /* underscored:true */
    }
    const User= sequelize.define(alias,cols,config);
    User.associate=function(models){
        User.hasMany(models.Order,{
            as:"order",
            foreignKey:"user_id"
        })
    }
    return User;
}