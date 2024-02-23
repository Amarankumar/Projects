const express=require('express');
const bodyParser=require('body-parser');

const app=express();

const taskRoute=require('./router/task.route');
const userRoute=require('./router/user.route');

// uses
app.use(bodyParser.json());
app.use('/api/tasks',taskRoute)
app.use('/api/user',userRoute);

module.exports=app;