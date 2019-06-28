const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'product'
        }
    ]
    /**
     * -1: chờ duyệt
     * 0:  đã duyệt
     * 1: bị chặn
     */
});

const Category = mongoose.model('Category', CategorySchema);
module.exports = {
    Category, CategorySchema
}