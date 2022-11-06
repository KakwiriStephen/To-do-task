const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const toDoRouter = require('./routes/toDoRoutes');
const cors = require('cors')
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// DATABASE CONFIG
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose
    .connect(DB, {
        useNewUrlParser: true,

    }).then(() => console.log('DB connection successful'));


// ROUTES
app.use('/api/todoLists', toDoRouter)

port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running at ${port}`));