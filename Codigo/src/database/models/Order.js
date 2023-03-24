module.exports=(sequelize,dataTypes)=>{
    let alias="Order";
    let cols={
        id:{
            date:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        user_id:dataTypes.INTEGER,
        total:dataTypes.DECIMAL,
        estado:dataTypes.STRING,
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
            as:"orders",
            foreignyKey:"user_id"
        })
    }
    return User;
}