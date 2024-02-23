
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
require('dotenv').config();
const db=require('../config/database');
const User=db.user;

async function signUp(userData){
    // try{
        // check duplicate email
        const taskUser = await User.findOne({
            where: { email: userData.email }
        });
        if(taskUser){
            throw {
                message:"User Already Exists",
                taskUser:taskUser
            }
        }
        // password hashing
        const hash=await bcrypt.hash(userData.password,10);
        const user={
            username:userData.username,
            password:hash,
            email:userData.email,
            mobile:userData.mobile
        };
        const createUser= await User.create(user);
        return createUser;
    // } catch(error){
    //     throw error;
    // } 
}
async function login(loginData){
    // find a user 
    const user = await User.findOne({ where: { email: loginData.email } });
    if (!user) {
        throw {
            status: 401,
            message: 'Invalid user',
        };
    }
    // create a token 
    const result = await bcrypt.compare(loginData.password, user.password);
    if (result) {
        const token = jwt.sign({
            email: user.email,
            userId: user.id,
        }, process.env.JWT_KEY);
        return token;
    } else {
        throw {
            status: 401,
            message: 'Invalid user',
        };
    }
}
// get all user
async function getAllUsers(){
    try{
        const user= await User.findAll()
    return user;
    } catch(error){
        throw error;
    }
}

module.exports={
    signUp:signUp,
    login:login,
    getAllUsers:getAllUsers
}