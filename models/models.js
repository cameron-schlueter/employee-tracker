const Department = require('./Department');
const Employee = require('./Employee');
const Role = require('./Role');

// Categories have many Products
Departments.hasMany(Department, {
  foreignKey: 'department_id',
  
});
// Products belongToMany Tags (through ProductTag)
Employee.belongsToMany(Employee, {
    through: DepartmentEmployee,
    foreignKey: 'employee_id',
});
// Tags belongToMany Products (through ProductTag)
Role.belongsToMany(Role, {
  through: EmployeeRole,
  foreignKey: 'role_id',
});

module.exports = {
  Departments,
  Employee,
  Role,

};
