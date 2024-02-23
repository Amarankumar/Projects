
const db=require('../config/database');
const Task=db.task;

// create task
async function addTask(info){
    try{
        const task=await Task.create(info);
    return task;
    } catch(error){
        throw error;
    }
}
// get all task
async function getAllTask(){
    try{
        const task=await Task.findAll();
        return task;
    } catch(error){
        throw error;
    }
}
// get one task
async function getOneTask(task_id){
    try{
        const task=await Task.findOne({where:{task_id:task_id}});
    return task;
    } catch(error){
        throw error;
    }
}
// update task
async function updateTask(task_id,updateInfo) {
    try{
        const task =await Task.update(updateInfo,{where:{task_id:task_id}});
    return task;
    }catch(error){
        throw error;
    }
}
// delete task
async function deleteTask(task_id){
    try{
        const task=await Task.destroy({where:{task_id:task_id}});
    return task;
    }catch(error){
        throw error;
    }
}

module.exports={
    addTask:addTask,
    getAllTask:getAllTask,
    getOneTask:getOneTask,
    updateTask:updateTask,
    deleteTask:deleteTask
}
