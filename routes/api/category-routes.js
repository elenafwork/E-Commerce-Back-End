const router = require('express').Router();
const { Category, Product } = require('../../models');


router.get('/', async (req, res) => {
  // find all categories
  try {
    const allCategoriesData= await Category.findAll
    ({
      include: [{ model: Product}],
    });
    res.status(200).json(allCategoriesData);
  } catch (err){
    res.status(500).json(err);
  }
  
});

router.get('/:id',async (req, res) => {
  
  try {
    const CategoryData= await Category.findByPk
    (req.params.id, {
      include: [{ model: Product}],
    });
    if (!CategoryData){
      res.status(404).json({message: 'No Category  found with this id!'});
      return;
    }
    res.status(200).json(CategoryData);
  } catch (err){
    res.status(500).json(err);
  }
 
});

router.post('/', async (req, res) => {

  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
