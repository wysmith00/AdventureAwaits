import 'dotenv' 

import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import router from './routes.js'
const app = express()


// Middleware here
app.use(cors());
app.use(express.json()); 

app.use('/api', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const db = mongoose.connection;






