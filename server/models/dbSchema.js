const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    task_name: {type:String, required: true},
    task_description:{type:String, required:true},
    start_date_time: {type:Date, required:true},
    end_date_time: {type:Date, required:true},
    is_started: {type:Boolean, required:false},
    is_completed: {type:Boolean, required:false},
    status: {
        type:String, 
        enum:['Pending', 'Completed', "inProgress"],
    }
})
// default: 'Pending'
module.exports = mongoose.model('Task',taskSchema)