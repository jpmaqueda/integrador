module.exports=(sequelize,dataTypes)=>{
    let alias="Material";
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
        /* underscored:true */
    }
    const Material= sequelize.define(alias,cols,config);
    Material.associate=function(models){
        Material.hasMany(models.Product,{
            as:"materials",
            foreignyKey:"material_id"
        })
    }
    return Category;
}