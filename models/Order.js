
module.exports = (sequelize, DataTypes) => {
    const Orders = sequelize.define("orders",{
        
        orderNumber: {
            type: DataTypes.INTEGER(15),
            primaryKey: true,
        },
    
        orderDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        requiredDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        shippedDate: {
            type: DataTypes.DATE,
            defaultValue: null,
        },
        status: {
            type: DataTypes.STRING(15),
            allowNull: false,
        },
        comments: {
            type: DataTypes.TEXT,
        },

    });

    Orders.associate = (models) => {
        Orders.belongsToMany(models.products, { 

            foreignKey: {
                name: "orderNumber",
                allowNull: false,
              },
            
            through: models.Orderdetails
        
        
        });
      };
        
    
    return Orders;
}