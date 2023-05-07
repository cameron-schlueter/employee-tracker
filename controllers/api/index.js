const router = require('express').Router();
const userRoutes = require('./employeeRoutes');
const projectRoutes = require('./departmentRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

module.exports = router;
