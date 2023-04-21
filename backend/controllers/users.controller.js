const User = require("../models/userModel");


exports.getAllUsers=async (req,res)=>{
    
    try{
        const users = await User.find({},"username email points").sort({points:-1});
        res.json(users.map(({ username, email, points }) => ({ username, email, points })));
    }catch{
        res.status(500).json({ message: error.message });
    }
};