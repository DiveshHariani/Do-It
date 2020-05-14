const mongoose = require('mongoose');

const TaskModel = {
    title: String,
    details: String,
    due: String
};

const Task = mongoose.model('Tasks',TaskModel);
module.exports = Task;