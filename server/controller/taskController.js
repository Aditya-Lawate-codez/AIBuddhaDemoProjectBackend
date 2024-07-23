const Task = require('../../config/db')
const MESSAGES = require('../constants/Messages');
const statusCodes = require('../constants/StatusCodes');


const createTask = async (req, res)=>{
    try{
        const task = Task(req.body);
        await task.save();
        res.status(statusCodes.CREATED).send(task);
    }
    catch(err){
        res.status(statusCodes.BAD_REQUEST).json({message: err.message});
    }
}

const updateTask = async (req, res)=>{
    try{
        const {id} = (req.params);
        await Task.findByIdAndUpdate(id, req.body);
        res.json({message : MESSAGES.TASK_UPDATED});
    }
    catch(err){
        res.status(statusCodes.BAD_REQUEST).json({message: err.message});
    }
}

const getTasks = async (req, res)=>{
    try{
        const task = Task.find();
        res.status(statusCodes.SUCCESS).json(task);
    }
    catch(err){
        res.status(statusCodes.SERVER_ERROR).json({message: err.message});
    }
}

const deleteTask = async (req, res)=>{
    try{
        const {id} = req.params;
        await Task.findByIdAndDelete(id, req.body);
        res.json({message: MESSAGES.TASK_DELETED})
    }
    catch(err){
        res.status(statusCodes.BAD_REQUEST).json({message: err.message});
    }
}

module.exports = {
    createTask,
    updateTask,
    getTasks,
    deleteTask
};