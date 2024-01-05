import mongoose from "mongoose";

const blogInfoSchema = new mongoose.Schema({
    title: String,
    content: String,
});

const BlogInfo = mongoose.model('BlogInfo', blogInfoSchema);

export default BlogInfo;