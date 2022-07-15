require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./routes/auth');
const postRouter = require('./routes/post'); 

const app = express();
app.use(express.json());
app.use('/api/auth',authRouter)
app.use('/api/posts',postRouter)

const PORT = 5000;

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mern-learnit.qovvz0u.mongodb.net/mern-learnit?retryWrites=true&w=majority`) 
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)) )
    .catch((error) => console.log(error.message));