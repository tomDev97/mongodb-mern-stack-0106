const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema({
    title : { type : String, required : true }
})

const Tag = mongoose.model('tag', TagSchema);
module.exports = {
    Tag, TagSchema
}