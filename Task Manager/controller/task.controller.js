const taskService=require('../service/task.service');
const { taskSchema } = require('../validate/validation')

// task create
const addTask=async (req,res) =>{
    try{
        let info={
            task_name:req.body.task_name,
            description:req.body.description,
            is_completed:req.body.is_completed ?  req.body.is_completed:false
        };
        // validation
        const validationResult=await taskSchema.validate(info);
        if(validationResult.error !=null){
            return res.status(400).json({
                message:"validation failed",
                error:validationResult,
            });
        }
        const task= await taskService.addTask(info);
        res.status(200).send({
              message:'Task Created',
              task:task  
        });
    } catch(error){
        res.status(500).send({
            message:"Something Wrong In Task Creation",
            error:error
        });
    }
}
// get all task 
const getAllTask=async (req,res) =>{
    try{
        const task=await taskService.getAllTask();
        res.status(200).send({
            message:'All Tasks',
            task:task
        });
    } catch(error){
        res.status(500).send({
            message:"Something Wrong In Get All Tasks",
            error:error
        });
    }
}
//  get one task 
const getOneTask=async (req,res) =>{
    try{
        const task_id=req.params.task_id;
        const task=await taskService.getOneTask(task_id);
        if(task){
            res.status(200).send(task)
        }else{
            res.status(404).send("Data Not Found")
        }
    } catch(error){
        res.status(500).send({
            message:"Something Wrong In Get One Task",
            error:error
        });
    }
}
// update task
const updateTask=async (req,res) =>{
    try{
        const task_id=req.body.task_id;
    const updateInfo={
        task_name:req.body.task_name,
        description:req.body.description,
        is_completed:req.body.is_completed ?  req.body.is_completed:false
    }
    // validation
    const validationResult=await taskSchema.validate(updateInfo);
    if(validationResult.error !=null){
        return res.status(400).json({
            message:"validation failed In Update",
            error:validationResult,
        });
    }
    const task=await taskService.updateTask(task_id,updateInfo);
    res.status(200).send({
        message:"Task Updated Successfully",
        task:task
    })
    }catch(error){
        res.status(500).send({
            message:"Something Wrong Update",
            error:error
        });
    }
}
// delete task
const deleteTask =async (req,res) =>{
    try{
        const task_id=req.params.task_id;
    await taskService.deleteTask(task_id);
    res.status(200).send({
        message:"Task Deleted Successfully"
    })
    }catch(error){
        res.status(500).send({
            message:"Something Wrong Delete",
            error:error
        });
    }
}

module.exports={
    addTask:addTask,
    getAllTask:getAllTask,
    getOneTask:getOneTask,
    updateTask:updateTask,
    deleteTask:deleteTask
}