const userController=require('../controller/user.controller');
const route=require('express').Router();

route.post('/sign-up',userController.signUp);
route.post('/login',userController.login);
route.get('/getAllUsers',userController.getAllUsers);

module.exports=route;