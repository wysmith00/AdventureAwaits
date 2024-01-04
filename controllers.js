import  BlogInfo  from "../models/models.js";
import  Workout  from "../models/workoutSchema.js";

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

async function createWorkout(req, res) {
    try {
        const workout = new Workout(req.body);
        await workout.save();
        res.status(201).send(workout);
    } catch (error) {
        res.status(400).send(error);
    }
};

async function getAllWorkouts(req, res) {
    try {
        const workouts = await Workout.find();
        res.status(200).send(workouts);
    } catch (error) {
        res.status(500).send(error);
    }
};

async function getWorkoutById(req, res) {
    try {
        const workout = await Workout.findById(req.params.id);
        if (!workout) {
            return res.status(404).send();
        }
        res.send(workout);
    } catch (error) {
        res.status(500).send(error);
    }
};

async function updateWorkout(req, res) {
    try {
        const workout = await Workout.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidatorrs: true});
        if (!workout) {
            return res.status(404).send();
        }
        res.send(workout);
    } catch (error) {
        res.status(400).send(error);
    }
};

async function deleteWorkout(req, res) {
    try {
        const workout = await Workout.findByIdAndDelete(req.params.id);
        if (!workout) {
            return res.status
        }
        res.send(workout);
    } catch (error) {
        res.status(500).send(error);
    }
};


export {createBlogInfo, getAllBlogInfos, getBlogInfoById, updateBlogInfo, deleteBlogInfo, createWorkout, getAllWorkouts, getWorkoutById, updateWorkout, deleteWorkout}