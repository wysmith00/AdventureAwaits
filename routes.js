//import { workoutSchema } from './workoutSchema.js//
const router = express.Router();
import {createBlogInfo, getAllBlogInfos, getBlogInfoById, updateBlogInfo, deleteBlogInfo, createWorkout, getAllWorkouts, getWorkoutById, updateWorkout, deleteWorkout} from './controllers.js'
import express from 'express';

router.post('/workouts', createWorkout);
router.get('/workouts', getAllWorkouts);
router.get('/workouts/:id', getWorkoutById);
router.put('/workouts/:id', updateWorkout);
router.delete('/workouts/:id', deleteWorkout);

router.post('/bloginfos', createBlogInfo);
router.get('bloginfos', getAllBlogInfos);
router.get('/bloginfos', getBlogInfoById);
router.put('/bloginfos/:id', updateBlogInfo);
router.delete('/bloginfos/:id', deleteBlogInfo);

//module.exports = router;//
export default router;
