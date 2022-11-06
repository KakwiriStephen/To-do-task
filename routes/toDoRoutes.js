const express = require('express');
const toDoController = require('../controller/toDoController');
const router = express.Router();

router
    .route('/')
    .get(toDoController.getAllToDoList)
    .post(toDoController.createToDo);


router
    .route('/:id')
    .get(toDoController.getToDoList)
    .patch(toDoController.updateToDo)
    .delete(toDoController.deleteTodo)



module.exports = router;