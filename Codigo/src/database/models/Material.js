module.exports=(sequelize,dataTypes)=>{
    let alias="Material";
    let cols={
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        nombre:dataTypes.STRING,
        createdAt:dataTypes.DATE,
        updatedAt:dataTypes.DATE
    }
    let config={
        timestamps:true,
        
        /* underscored:true  */
        
    }
    const Material= sequelize.define(alias,cols);
    Material.associate=function(models){
        Material.hasMany(models.Product,{
            as:"materials",
            foreignKey:"materialId"
        })
    }
    return Material;
}