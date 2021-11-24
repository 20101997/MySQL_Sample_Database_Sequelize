module.exports = (sequelize, DataTypes) => {
  const Customers = sequelize.define("customers", {
    customerNumber: {
      type: DataTypes.INTEGER(15),
      primaryKey: true,
    },
    customerName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    contactLastName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    contactFirstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    addressLine1: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    addressLine2: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING(50),
      defaultValue: null,
    },
    postalCode: {
      type: DataTypes.STRING(50),
      defaultValue: null,
    },
    country: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    creditLimit: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: null,
    },
  });

  Customers.associate = (models) => {
    Customers.hasMany(models.payments, {
      foreignKey: {
        name: "customerNumber",
        allowNull: false,
      },
    });
  };
  Customers.associate = (models) => {
    Customers.hasMany(models.orders, {
      foreignKey: {
        name: "customerNumber",
        allowNull: false,
      },
    });
  };

  return Customers;
};
