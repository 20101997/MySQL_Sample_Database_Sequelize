
module.exports = (sequelize, DataTypes) => {
    const Orderdetails = sequelize.define("Orderdetails",{
        
        // orderNumber: {
        //     type: DataTypes.INTEGER(11),
        //     allowNull: false,
        //     references: {
        //         model: Orders, 
        //         key: 'orderNumber'
        //       }
        // },
    
        // productCode: {
        //     type: DataTypes.STRING(15),
        //     allowNull: false,
        //     references: {
        //         model: Products, 
        //         key: 'productCode'
        //       }
        // },
        quantityOrdered: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        priceEach: {
            type: DataTypes.DECIMAL(10,2),
            defaultValue: null,
        },
        orderLineNumber: {
            type: DataTypes.SMALLINT(6),
            allowNull: false,
        },

    });

    
        
    
    return Orderdetails;
}