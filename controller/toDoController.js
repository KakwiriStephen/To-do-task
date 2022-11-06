const ToDo = require('../models/toDoModel');

exports.getAllToDoList = async(req, res) => {
    try {
        const todos = await ToDo.find();
        res.status(200).json({
            status: 'success',
            results: todos.length,
            data: {
                todos,
                message: 'All Tasks are fetched successfully'
            }
        })

    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })

    }

}

exports.getToDoList = async(req, res) => {
    try {
        const todo = await ToDo.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                todos: todo,
                message: 'Task is fetched successfully'
            }

        })

    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }

}
exports.createToDo = async(req, res) => {
    try {
        const newTodo = await ToDo.create(req.body)
        res.status(201).json({
            status: 'success',
            data: {
                todo: newTodo,
                message: 'Task is created successfully'
            }

        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}

exports.updateToDo = async(req, res) => {
    try {
        const todo = await ToDo.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: 'success',
            data: {
                todo: todo,
                message: 'Task is updated successfully'
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}

exports.deleteTodo = async(req, res) => {
    try {

        await ToDo.findByIdAndDelete(req.params.id)
        res.status(204).json({
            status: 'success',
            data: null,
            message: 'Task is deleted succesfully'
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}