
module.exports = (sequelize, DataTypes) => {
    const Employees = sequelize.define("employees",{
       
        employeeNumber: {
            type: DataTypes.INTEGER(15),
            primaryKey: true,
        },
        lastName: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        firstName: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        extension: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
 
        jobTitle: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
  
    });
    Employees.associate =(models) => {

       
            Employees.hasMany(models.customers, {
              foreignKey: {
                name: "salesRepEmployeeNumber",
              },
            });

            Employees.hasMany(models.employees, {
                foreignKey: {
                  name: "reportsTo",
                },
              });
          

        // Employees.belongsTo(models.offices, {
        //     onDelete: "cascade", 
          
        //     foreignKey: {
        //         name: 'officeCodee',
        //        // allowNull: false,
        //       },
        //      });

        // Offices.hasMany(models.payments, {
        //         onDelete: "cascade", 
        //         foreignKey: {
        //             name: 'bla',
        //             allowNull: false,
        //           },
        //          });

    }


    
    return Employees;
}