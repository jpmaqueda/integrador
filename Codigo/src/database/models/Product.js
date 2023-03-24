module.exports=(sequelize,dataTypes)=>{
    let alias="Product";
    let cols={
        id:{
            date:dataTypes.INTEGER,
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
        created_at: dataTypes.TIMESTAMP,
        updated_at: dataTypes.TIMESTAMP,
        
    }
    let config={
        timestamps:true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        underscored:true
    }
    const Product= sequelize.define(alias,cols,config);
    Product.associate=function(models){
        Product.belongsTo(models.Category,{
            as:"category",
            foreignyKey:"category_id"
        }),
        Product.belongsTo(models.Material,{
            as:"material",
            foreignyKey:"material_id"
        })
    }
    return Product;
}