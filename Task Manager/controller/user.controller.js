const userService=require('../service/user.service');
const { userSchema, loginSchema } = require('../validate/validation')

// create account
const signUp=async (req,res) =>{
   try{
    let userData={
        username:req.body.username,
        password:req.body.password,
        mobile:req.body.mobile,
        email:req.body.email
    };
    const validationResult=await userSchema.validate(userData);
    if(validationResult.error !=null){
        return res.status(400).json({
            message:"validation failed",
            error:validationResult,
        });
    }
    const result=await userService.signUp(userData);
    res.status(200).send({
        message:'User Created Successfully',
        result:result
    })
   } catch(error){
    res.status(500).send({
        message:"Something Wrong",
        error:error
    })
   }
}
// login
const login=async (req,res) =>{
    try{
        let loginData={
            email:req.body.email,
            password:req.body.password
        }
        const validationResult=await loginSchema.validate(loginData);
        if(validationResult.error !=null){
            return res.status(400).json({
                message:"validation failed",
                error:validationResult,
            });
        }
        const result= await userService.login(loginData);
        res.status(200).send({
            message: 'Login success',
            token: result,
        });
    } catch(error){
        res.status(500).send({
            message:"Something Wrong",
            error:error
        })
    }
}
// get all users
const getAllUsers=async (req,res) =>{
    try{
        const users=await userService.getAllUsers();
        res.status(200).send({
        message: 'List Of Users',
        users: users,
    });
    } catch(error){
        res.status(500).send({
            message:"Something Wrong",
            error:error
        })
    }
}

module.exports={
    signUp:signUp,
    login:login,
    getAllUsers:getAllUsers
}
