module.exports = (sequelize, DataTypes) => {
    const Offices = sequelize.define("offices",{

        officeCode: {
            type: DataTypes.STRING(10),
            primaryKey: true,
        },
    
        city: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        addressLine1: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        addressLine2: {
            type: DataTypes.STRING(50),
            defaultValue: null,
        },
        state: {
            type: DataTypes.STRING(10),
            defaultValue: null,
        },
        country: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        postalCode: {
            type: DataTypes.STRING(15),
            allowNull: false,
        },
        territory: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },

    });
        Offices.associate =(models) => {

            Offices.hasMany(models.employees, {
                
                foreignKey: {
                    name: 'officeCode',
                     allowNull: false,
                  },
                 });

        }
    return Offices;
}