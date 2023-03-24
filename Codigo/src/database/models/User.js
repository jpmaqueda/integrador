module.exports=(sequelize,dataTypes)=>{
    let alias="User";
    let cols={
        id:{
            date:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        nombre:dataTypes.STRING,
        email:dataTypes.STRING,
        contrasena:dataTypes.STRING,
        rol:dataTypes.INTEGER,
        created_at: dataTypes.TIMESTAMP,
        updated_at: dataTypes.TIMESTAMP,

    }
    let config={
        timestamps:true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        underscored:true
    }
    const User= sequelize.define(alias,cols,config);
    User.associate=function(models){
        User.hasMany(models.Order,{
            as:"order",
            foreignyKey:"user_id"
        })
    }
    return User;
}