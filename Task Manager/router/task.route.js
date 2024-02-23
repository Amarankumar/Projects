const taskController=require('../controller/task.controller');
const checkAuthendicate=require('../middleware/auth');
const route=require('express').Router();

route.post('/addtask',checkAuthendicate.checkAuth,taskController.addTask);
route.get('/getAllTask',checkAuthendicate.checkAuth,taskController.getAllTask);
route.get('/:task_id',checkAuthendicate.checkAuth,taskController.getOneTask);
route.put('/:task_id',checkAuthendicate.checkAuth,taskController.updateTask);
route.delete('/:task_id',checkAuthendicate.checkAuth,taskController.deleteTask);


module.exports=route;