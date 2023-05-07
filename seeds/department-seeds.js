const { Department } = require('../models/models');

const departmentData = [
  {
    id: department,
    name: varchar(department),
  }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;