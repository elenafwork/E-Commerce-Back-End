const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const allTagsData= await Tag.findAll
    ({
      include: [{ model: Product,  through: ProductTag, as: 'tag_id' }],
    });
    res.status(200).json(allTagsData);
  } catch (err){
    res.status(500).json(err);
  }
  
});

router.get('/:id',async (req, res) => {
  
  try {
    const tagData= await Tag.findByPk
    (req.params.id, {
      include: [{ model: Product,  through: ProductTag, as: 'tag_id' }],
    });
    if (!tagData){
      res.status(404).json({message: 'No Tag found with this id!'});
      return;
    }
    res.status(200).json(tagData);
  } catch (err){
    res.status(500).json(err);
  }
 
});


router.post('/', async  (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(200).json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id',async  (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = await Tag.update(req.body, { 
      where: {
        id: req.params.id, 
      },
    });
    if (tagData){
      res.status(200).json(tagData);
    } else {
      res.status(404).json.end();
    }
  } catch (err){
    res.status(500).json(err);
  }
});

router.delete('/:id', async(req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy
    ({
      where: {
        id: req.params.id,
      }
    });
    if (!tagData){
      res.status(404).json({message: 'No tag found with this id!'});
      return;
    }
    res.status(200).json(tagData);
   } catch (err){
    res.status(500).json(err);
   }




});


module.exports = router;
