const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Must have a title']
    },
    description: {
        type: String,
        required: [true, 'Must have a description'],
        trim: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const ToDo = mongoose.model('ToDo', todoSchema);
module.exports = ToDo