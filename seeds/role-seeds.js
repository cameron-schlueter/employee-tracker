const { Role } = require('../models/models');

const departmentData = [
  {
    id: role_id,
    department_name: varchar(department),
  },
  {
    title: VARCHAR(30),
  },
  {
    salary: VARCHAR(30),
  },
  {
    department_id: INTEGER(30),
  },
];

const seedDepartment = () => Category.bulkCreate(departmentData);

module.exports = seedDepartment;