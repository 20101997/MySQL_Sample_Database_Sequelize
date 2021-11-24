
module.exports = (sequelize, DataTypes) => {
    const Productlines = sequelize.define("productlines",{

        productLine: {
            type: DataTypes.STRING(50),
            primaryKey: true,
        },
    
        textDescription: {
            type: DataTypes.STRING(4000),
           
        },
        htmlDescription: {
            type: DataTypes.TEXT,
            
        },
        image: {
            type: DataTypes.BLOB('miduim') 
            
        }, 

    });
    
    Productlines.associate =(models) => {

        Productlines.hasMany(models.products, {
        foreignKey: {
          name: "productLine",
        },
      });
   
    }
    return Productlines;
} 