const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    type: String,
    duration: Number,
    notes: String,
});

const blogInfoSchema = new mongoose.Schema({
    title: String,
    content: String,
});

const Workout = mongoose.model('Workout', workoutSchema);
const BlogInfo = mongoose.model('BlogInfo', blogInfoSchema);

module.exports = { Workout, BlogInfo };