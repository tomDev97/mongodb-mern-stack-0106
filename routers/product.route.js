const express = require('express');
const router = express.Router();

const { Product } = require('../models/products');
const { Category } = require('../models/category');
const { Tag } = require('../models/tags');


//ROUTER POST
router.post('/create', async (req, res) => {
    let { title, description, price, categoryId, tags } = req.body;

    let convertTagToArray = tags.split(',');

    const newProduct = new Product({ title, description, price, categoryId, tags : convertTagToArray});
    
    let infoCategory = await Category.findByIdAndUpdate(categoryId, {
        $addToSet : { products : newProduct._id }
    })

    let productAfterSave = await newProduct.save();
    res.json({ productAfterSave, infoCategory });
})


router.get('/list', async (req, res) => {
    let listProduct = await Product.find();
    res.json({ listProduct });
})

module.exports = router;