module.exports=(sequelize,dataTypes)=>{
    let alias="Order";
    let cols={
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        user_id:dataTypes.INTEGER,
        total:dataTypes.DECIMAL,
        estado:dataTypes.STRING,
        

    }
    let config={
        timestamps:true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        underscored:true
    }
    const Order= sequelize.define(alias,cols,config);
    Order.associate=function(models){
        Order.belongsTo(models.User,{
            as:"orders",
            foreignKey:"user_id"
        })
    }
    return Order;
}