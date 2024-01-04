import { BlogInfo } from "./models";

async function createBlogInfo(req, res) {
    try {
        const blogInfo = new BlogInfo(req.body);
        await blogInfo.save();
        res.status(201).send(blogInfo);
    } catch (error) {
        res.status(400).send(error);
    }
};

async function getAllBlogInfos(req, res) {
    try {
        const blogInfos = await BlogInfo.find();
        res.status(200).send(blogInfos);
    } catch (error) {
        res.status(500).send(error);
    }
};

async function getBlogInfoById(req, res) {
    try {
        const blogInfo = await BlogInfo.findById(req.params.id);
        if (!blogInfo) {
            return res.status(404).send();
        }
        res.send(blogInfo);
    } catch (error) {
        res.status(500).send(error);
    }
};

async function updateBlogInfo(req, res) {
    try {
        const blogInfo = await BlogInfo.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if(!blogInfo) {
            return res.status(404).send();
        }
        res.send(blogInfo);
    } catch (error) {
        res.status(400).send(error);
    }
};

async function deleteBlogInfo(req, res) {
    try {
        const blogInfo = await BlogInfo.findByIdAndDelete(req.params.id);
        if (!blogInfo) {
            return res.status(404).send();
        }
        res.send(blogInfo);
    } catch (error) {
        res.status(500).send(error);
    }
};
