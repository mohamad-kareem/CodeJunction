const User = require("../models/userModel");


getAllUsers=async (req,res)=>{
    
    try{
        const users = await User.find({},"username email points").sort({points:-1});
        
    }catch{
        
    }
};