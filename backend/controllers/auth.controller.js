const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
var nodemailer = require('nodemailer');
exports.register =async (req,res)=>{

  const {username,email,password}=req.body;

  const existingUser=await User.findOne({email});
    if (existingUser) 
        return res.status(409).json({message:"email already exist"})

  const user=new User();
    user.username=username;
    user.email=email;
    user.password=password;

   await user.save();
  
  const { password: hashedPassword, ...newUser } = user.toJSON()
  res.status(201).json(newUser);
}



exports.login = async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email });
      if (!user) 
        return res.status(404).json({ message: "Invalid Credentials" });

    const isMatched = await user.matchPassword(password);
    console.log(isMatched);
      if (!isMatched)
        return res.status(404).json({ message: "Invalid Credentials" });
    
    const token = jwt.sign({ id: user._id, email: user.email }, process.env.SECRET_KEY);
    
    res.json({ token })
}

exports.forgetPasswordNotification = async (req,res) =>{
  const {email}=req.body;
  try{
    const user=await User.findOne({email});
    if(!user){
      return res.status(400).json({error:"user with this email does not exists"});
    }
    const token=jwt.sign({email:user.email,id:user._id},process.env.RESET_PASSWORD_KEY,{expiresIn:"10m"});
    
    const link=`http://localhost:8000/auth/reset-password/${user._id}/${token}`;
    console.log("link:",link)

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'mohamadkareemeng@gmail.com',
        pass: process.env.NODE_MAILER_KEY,
      }
    });
    
    var mailOptions = {
      to: 'mohamadkareemeng@gmail.com',
      subject: 'Reset Password',
      text:link
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }catch(error){
  }
}

exports.forgotpassword = async (req,res)=>{
  const {id,token}=req.params;
  console.log(req.params);
  const user=await User.findOne({_id:id});
  if(!user){
    return res.status(400).json({error:"user with this email does not exists"});
  }
  try{
    const verify=jwt.verify(token,process.env.RESET_PASSWORD_KEY);
    res.render("index",{email:verify.email,status:"not verified"})
  }catch(error){
    res.send("not verified")

  }
}

exports.resetpassword = async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  const user = await User.findOne({ _id: id });
  if (!user) {
    return res.status(400).json({ error: "User with this email does not exist" });
  }
  try {
    const verify = jwt.verify(token, process.env.RESET_PASSWORD_KEY);
    user.password = password;
    await user.save(); 

    res.render("index", { email: verify.email, status: "verified" });//set status as an identifier for the html (ejs)
  }catch (error) {
    return res.status(400).json({ message: "Something went wrong. Try again." });
  }
};