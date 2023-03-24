module.exports=(sequelize,dataTypes)=>{
    let alias="Category";
    let cols={
        id:{
            date:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        nombre:dataTypes.STRING,
        
    }
    let config={
        timestamps:true,
        underscored:true
    }
    const Category= sequelize.define(alias,cols,config);
    Category.associate=function(models){
        Category.hasMany(models.Product,{
            as:"categorys",
            foreignyKey:"category_id"
        })
    }
    return Category;
}