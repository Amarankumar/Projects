const jwt=require ('jsonwebtoken');

function checkAuth(req,res,next){
    try{
    const token=req.headers.authorization.split(" ")[1];
    const decodedtoken=jwt.verify(token,process.env.JWT_KEY);
    res.userData=decodedtoken;
    next();
    }catch(error){
        return res.status(401).json({
            message:"invalid or expired token",
            error:error
        })
    }

}
module.exports={
    checkAuth:checkAuth
}