const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

const Department = require('./Department');
const Role = require('./Role');

module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Employee.associate = (models) => {
    Employee.belongsTo(models.Role);
    Employee.belongsTo(models.Employee, {
      as: 'Manager',
      foreignKey: {
        name: 'managerId',
        allowNull: true,
      },
    });
  };

  return Employee;
};
module.exports = { User, Project };
