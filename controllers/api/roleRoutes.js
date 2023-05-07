const router = require('express').Router();
const { role } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  role.findAll({
    attributes: [''],
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price','stock', 'category_id']
      }
    ]
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  // find one role by its `id` value
  // be sure to include its associated Products
  role.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'role_name'],
    include: [
      {
        model: Employee,
        attributes: ['id', 'salary', 'department' ],
        include: [{model: Role, role_name}]
          
      }
    ]
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => res.json(err));
});

router.post('/', (req, res) => {
  // create a new role
  role.create(req.body)
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => res.json(err));
});

router.put('/:id', (req, res) => {
  // update a role by its `id` value
  role.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => res.json(err));
});

router.delete('/:id', (req, res) => {
  // delete a role by its `id` value
  role.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => res.json(err));
});

module.exports = router;