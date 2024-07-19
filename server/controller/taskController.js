const Task = require('../models/dbSchema')


exports.createTask = async (req, res)=>{
    try{
        const task = Task(req.body);
        await task.save();
        res.status(201).send(task);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
}

exports.updateTask = async (req, res)=>{
    try{
        const {id} = (req.params);
        await Task.findByIdAndUpdate(id, req.body);
        res.json({message : "Task updated"});
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
}

exports.getTasks = async (req, res)=>{
    try{
        const task = Task.find();
        res.json(task);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
}

exports.deleteTask = async (req, res)=>{
    try{
        const {id} = req.params;
        await Task.findByIdAndDelete(id, req.body);
        res.json({message: 'Task deleted'})
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
}