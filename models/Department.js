
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define('Department', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  Department.associate = (models) => {
    Department.hasMany(models.Role);
  };

  return Department;
};


module.exports = Department;
