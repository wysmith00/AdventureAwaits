import  BlogInfo  from "./models/models.js";
// Incorrect way, will lead to the 'Workout is not a constructor' error
import Workout from './models/workoutSchema.js';


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

async function updateBlogInfoById(req, res) {
    try {
        const updateData = req.body;
        const blogInfo = await BlogInfo.findByIdAndUpdate(req.params.id, updateData, { new: true });
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

// //async function createWorkout(req, res) {
//     console.log("Request Body:", req.body);
//     let userWorkout = req.body;
//     try {
//         console.log("Finding workout:", userWorkout);
//         const workout = await Workout.findOne({ workout : userWorkout });
//         //await workout.save();//
//         res.status(201).send(workout);
//     } catch (error) {
//         console.log("error encountered:", error.message);
//         res.status(400).send(error);
//     }
// };

async function createWorkout(req, res) {
    console.log("Request Body:", req.body);
    try {
        // Create a new workout document using the .create() method
        const workout = await Workout.create(req.body);
        res.status(201).send(workout);
    } catch (error) {
        console.log("error encountered:", error.message);
        res.status(400).send(error.message);
    }
};



async function getAllWorkouts(req, res) {
    console.log("Hello")
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

async function updateWorkoutById(req, res) {
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


export {createBlogInfo, getAllBlogInfos, getBlogInfoById, updateBlogInfoById, deleteBlogInfo, createWorkout, getAllWorkouts, getWorkoutById, updateWorkoutById, deleteWorkout}