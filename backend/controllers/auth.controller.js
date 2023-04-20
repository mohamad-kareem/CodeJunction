const User = require("../models/userModel");


register =async (req,res)=>{

  const {username,email,password}=req.body;

  const user=new User();
    user.username=username;
    user.email=email;
    user.password=password;

  user.save();
}

login = async (req, res) => {

    const { email, password } = req.body;

}