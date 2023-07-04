const router = require('express').Router();
const { Category, Product, ProductTag } = require('../../models');


router.get('/', async (req, res) => {
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
    const categoryData= await Category.findByPk
    (req.params.id, {
      include: [{ model: Product}],
    });
    if (!categoryData){
      res.status(404).json({message: 'No Category  found with this id!'});
      return;
    }
    res.status(200).json(categoryData);
  } catch (err){
    res.status(500).json(err);
  }
 
});

router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(req.body, { 
      where: {
        id: req.params.id,
      },
    });
    if (categoryData){
      res.status(200).json(categoryData);
    } else {
      res.status(404).json.end();
    }
  } catch (err){
    res.status(500).json(err);
  }
  
});

router.delete('/:id',async  (req, res) => {
 try {
  const categoryData = await Category.destroy
  ({
    where: {
      id: req.params.id,
    }
  });
  if (!categoryData){
    res.status(404).json({message: 'No category found with this id!'});
    return;
  }
  res.status(200).json(categoryData);
 } catch (err){
  res.status(500).json(err);
 }
  // delete a category by its `id` value
});

module.exports = router;
