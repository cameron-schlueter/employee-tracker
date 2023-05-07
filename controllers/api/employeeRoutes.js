const router = require('express').Router();
const { employee } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  employee.findAll({
    attributes: ['id', 'category_name'],
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
  // find one employee by its `id` value
  // be sure to include its associated Products
  employee.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'category_name'],
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price','stock', 'category_id'],
        include: [{model: Tag, through: ProductTag}]
          
      }
    ]
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => res.json(err));
});

router.post('/', (req, res) => {
  // create a new employee
  employee.create(req.body)
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => res.json(err));
});

router.put('/:id', (req, res) => {
  // update a employee by its `id` value
  employee.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => res.json(err));
});

router.delete('/:id', (req, res) => {
  // delete a employee by its `id` value
  employee.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => res.json(err));
});

module.exports = router;
