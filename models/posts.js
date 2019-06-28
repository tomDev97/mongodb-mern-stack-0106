const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: { type: String, unique: true, trim: true, required: true },
    description: String,
    pubDate : { type: Date, default: Date.now },
    status : { type: Number, default: -1 }
    /**
     * -1: chờ duyệt
     * 0:  đã duyệt
     * 1: bị chặn
     */
});

const Post = mongoose.model('post', PostSchema);
module.exports = {
    Post, PostSchema
}