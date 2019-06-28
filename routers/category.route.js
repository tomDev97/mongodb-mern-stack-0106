const express = require('express');
const router = express.Router();

const {Category} = require('../models/category')


//ROUTER POST
router.post('/create', (req, res) => {
    let { title, description } = req.body;
    const newCategory = new Category({ title, description });
    newCategory.save();
    res.json({newCategory});
})

router.get('/list', async (req, res) => {
    let listAllCategory = await Category.find({})
        .populate({
            path : 'products',
            select : 'title description -_id'
        });
    res.send(listAllCategory);
})
module.exports = router;