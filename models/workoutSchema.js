import mongoose from 'mongoose';

const workoutSchema = new mongoose.Schema({
    type: String,
    duration: Number,
    notes: String,
});

const Workout = mongoose.model('Workout', workoutSchema);

export default Workout;
