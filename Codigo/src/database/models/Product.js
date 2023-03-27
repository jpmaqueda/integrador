module.exports=(sequelize,dataTypes)=>{
    let alias="Product";
    let cols={
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        nombre:dataTypes.STRING,
        precio:dataTypes.DECIMAL,
        descripcion:dataTypes.STRING,
        imagen:dataTypes.STRING,
        color:dataTypes.STRING,
        stock:dataTypes.INTEGER,
        ancho:dataTypes.FLOAT,
        largo:dataTypes.FLOAT,
        alto:dataTypes.FLOAT,
        createdAt:dataTypes.DATE,
        updatedAt:dataTypes.DATE
        
    }
    let config={
        timestamps:true,
        
        
        
    }
    const Product= sequelize.define(alias,cols,config);
    Product.associate=function(models){
        Product.belongsTo(models.Category,{
            as:"category",
            foreignKey:"categoryId"
        }),
        Product.belongsTo(models.Material,{
            as:"material",
            foreignKey:"materialId"
        })
    }
    return Product;
}