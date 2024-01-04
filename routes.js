const { Workout, BlogInfo } = require('./models'); 
const router = express.Router();
import express from 'express';

router.post('/workouts', createWorkout);
router.get('/workouts', getAllWorkouts);
router.get('/workouts/:id', updateWorkout);
router.put('/workouts/:id', deleteWorkout);

router.post('/bloginfos', createBlogInfo);
router.get('bloginfos', getAllBlogInfos);
router.get('/bloginfos', getBlogInfoById);
router.put('/bloginfos/:id', updateBlogInfo);
router.delete('/bloginfos/:id', deleteBlogInfo);

module.exports = router;
export default router;