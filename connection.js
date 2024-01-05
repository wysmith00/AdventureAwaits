

import mongoose from 'mongoose'
// import dotenv from 'dotenv'


const DATABASE_URI = process.env.MONGO_URI

console.log("Database URI:", DATABASE_URI); // Remove this after verification

mongoose.connect(DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection
.on('open', () => {console.log('connected to mongo')})
.on('close', () => {console.log('disconnected from mongo')})
.on('error', (error) => {
    console.log('Error trying to connect to MongoDB:', error);
});

export default mongoose 