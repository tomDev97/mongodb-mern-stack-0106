const express = require('express');
const router = express.Router();

const { Tag } = require('../models/tags')


//ROUTER POST
router.post('/create', async (req, res) => {
    let { title } = req.body;
    const newTag = await new Tag({ title });
    newTag.save();
    res.json({newTag});
})

router.get('/list', async (req, res) => {
    let listAllTag = await Tag.find({})
    res.send(listAllTag);
})
module.exports = router;