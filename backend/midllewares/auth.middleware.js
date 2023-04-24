const jwt = require("jsonwebtoken")
const User=require("../models/userModel")
exports.authMiddleware=async (req,res,next)=>{ 
  try{
    const token=req.headers.authorization?.split(" ")[1]

    if(!token){
      return res.status(403).json({message:"Unauthenticated"})
    }
    const decoded= jwt.verify(token,process.env.SECRET_KEY);

    const user = await User.findById(decoded.id,"-password");
    req.user=user

    next();

  }catch{
      return res.status(403).json({message:"Server Error"})
  };
};