const sequelize = require('../config/connection');
const { Departments, Employee, Role } = require('../models/models');

const seedDepartment = require('./department-seeds');
const seedEmployee = require('./employee-seeds');
const seedRole = require('./role-seeds');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedDepartment();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedEmployee();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedRole();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();

