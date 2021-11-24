
module.exports = (sequelize, DataTypes) => {
    const Payments = sequelize.define("payments",{

        checkNumber: {
            type: DataTypes.STRING(50),
            primaryKey: true,
        },
    
        customerNumber: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        paymentDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        amount: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false,
        }, 

    });
    return Payments;
}