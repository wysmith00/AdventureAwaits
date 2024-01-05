//import { workoutSchema } from './workoutSchema.js//
const router = express.Router();
import {createBlogInfo, getAllBlogInfos, getBlogInfoById, updateBlogInfoById, deleteBlogInfo, createWorkout, getAllWorkouts, getWorkoutById, updateWorkoutById, deleteWorkout} from './controllers.js'
import express from 'express';

router.post('/workouts', createWorkout);
router.get('/workouts', getAllWorkouts);
router.get('/workouts/:id', getWorkoutById);
router.put('/workouts/:id', updateWorkoutById);
router.delete('/workouts/:id', deleteWorkout);

router.post('/bloginfos', createBlogInfo);
router.get('/bloginfos', getAllBlogInfos);
router.get('/bloginfos/:id', getBlogInfoById);
router.put('/bloginfos/:id', updateBlogInfoById);
router.delete('/bloginfos/:id', deleteBlogInfo);

//module.exports = router;//
export default router;
