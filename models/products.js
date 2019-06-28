const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title : { type: String, required : true },
    description : { type: String },
    price : { type: Number },
    tags : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'tag'
        }
    ]
})

const Product = mongoose.model('product', ProductSchema);
module.exports = {
    Product, ProductSchema
}