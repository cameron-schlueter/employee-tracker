const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salary: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  });

  Role.associate = (models) => {
    Role.belongsTo(models.Department);
    Role.hasMany(models.Employee);
  };

  return Role;
};
module.exports = Role;
