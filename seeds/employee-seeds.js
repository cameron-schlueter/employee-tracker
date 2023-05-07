const { Department } = require('../models/models');

const departmentData = [
  {
    id: department,
    department_name: varchar(department),
  },
  {
    first_name: VARCHAR(30),
  },
  {
    last_name: VARCHAR(30),
  },
  {
    role_id: INTEGER(30),
  },
  {
    manager_id: INTEGER(30),
  },
];

const seedDepartment = () => Category.bulkCreate(departmentData);

module.exports = seedDepartment;