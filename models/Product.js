module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define("products", {
    productCode: {
      type: DataTypes.STRING(15),
      primaryKey: true,
    },

    productName: {
      type: DataTypes.STRING(70),
      allowNull: false,
    },
    productScale: {
      type: DataTypes.STRING(10),
      allowNull: false,
    }, 
    productDescription: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    productVendor: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    quantityInStock: {
      type: DataTypes.SMALLINT(6),
      allowNull: false,
    },
    buyPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    MSRP: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  });
  Products.associate = (models) => {
    Products.belongsToMany(models.orders, 
      { 
        foreignKey: {
          name: "productCode",
          allowNull: false,
        },
        
        through: models.Orderdetails
      
      
      });
  };

  return Products;
};
