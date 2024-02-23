const joi=require('joi');

// validation schema for task table
const taskSchema=joi.object({
    task_name: joi.string().max(100).required(),
    description: joi.string().max(200),
    is_completed: joi.boolean().default(false)
});
// validation schema for user table
const userSchema= joi.object({
    username: joi.string().alphanum().min(3).max(20).required(),
    password: joi.string().min(6).max(20).required(),
    mobile: joi.string().length(10).required(),
    email: joi.string().email().max(50).required()
});
// validation for login
const loginSchema=joi.object({
    password: joi.string().min(6).max(20).required(),
    email: joi.string().email().max(50).required()  
});

module.exports={
    taskSchema:taskSchema,
    userSchema:userSchema,
    loginSchema:loginSchema
};