const User = require("../models/userModel");
const mongoose = require('mongoose');
exports.getAllUsers=async (req,res)=>{
    try {
        const users = await User.find({},"username email points").sort({points:-1});
        res.json(users.map(({ username, email, points }) => ({ username, email, points })));
    }
    catch {
        res.status(500).json({ message: error.message });
    }
};

exports.getUserCodes = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('username codes');
    console.log(user)
    res.status(200).json({user});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

exports.addCode = async (req,res) =>{

    const userId= req.user._id;
    const {title,description,roomId} = req.body;

    try {
        const user = await User.findById(userId);
        console.log(user)
        if (!user){
            return res.status(404).json({message:"user not found"})
        }
        const Code={
            title:title,
            description:description,
            createdAt: Date.now(),
            roomId:roomId,
        };

        user.codes.push(Code);
        await user.save();

        res.status(201).json(Code);
    }catch(error){
        console.error(error);
        res.status(500).json({ message: "Server error" });
    };
};

exports.updateCode = async (req,res) =>{
  const {code, roomId} = req.body;
  const userId = req.user._id;

  try{
    const user = await User.findOne({_id:userId, "codes.roomId":roomId});

    if (!user) {
      return res.status(404).json({message:"User Not Found"});
    }
    const updatedCode = user.codes.find((c) => c.roomId === roomId);
    updatedCode.code = code;

    await user.save();

    res.status(200).json(updatedCode);
    console.log(updatedCode)

  }catch(error){
    console.error(error);
    res.status(500).json({ message: "Server error" });
  };
};

exports.getCodeCountsByMonth = async (req, res) => {
    try {
      const countsByMonth = await User.aggregate([
        {
          $match: {
            _id: req.user._id
          }
        },
        {
          $unwind: "$codes"
        },
        {
          $group: {
            _id: { $month: "$codes.createdAt" },
            count: { $sum: 1 }
          }
        },
        {
        $project: {
          month: {
            $switch: {
              branches: [
                { case: { $eq: [ "$_id", 1 ] }, then: "January" },
                { case: { $eq: [ "$_id", 2 ] }, then: "February" },
                { case: { $eq: [ "$_id", 3 ] }, then: "March" },
                { case: { $eq: [ "$_id", 4 ] }, then: "April" },
                { case: { $eq: [ "$_id", 5 ] }, then: "May" },
                { case: { $eq: [ "$_id", 6 ] }, then: "June" },
                { case: { $eq: [ "$_id", 7 ] }, then: "July" },
                { case: { $eq: [ "$_id", 8 ] }, then: "August" },
                { case: { $eq: [ "$_id", 9 ] }, then: "September" },
                { case: { $eq: [ "$_id", 10 ] }, then: "October" },
                { case: { $eq: [ "$_id", 11 ] }, then: "November" },
                { case: { $eq: [ "$_id", 12 ] }, then: "December" }
              ],
              default: "Invalid month"
            }
          },
          count: 1,
          _id: 0
        }
      },
        {
          $sort: { _id: 1 }
        }
      ]);
      res.json(countsByMonth);
      console.log(countsByMonth)
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
exports.updateProfile = async (req, res) => {
  try {
    const { username, email, job, profession } = req.body;
    const user = await User.findById(req.user._id);

    if (username) {
      user.username = username;
    }
    if (email) {
      user.email = email;
    }
    if (job) {
      user.job = job;
    }
    if (profession) {
      user.profession = profession;
    }

    await user.save();
    res.status(200).json(user);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getUserInfo = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('username job profession');
    res.status(200).json({user});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

exports.updateImageUrl = async (req, res) => {
  const { imageUrl } = req.body;
  const userId = req.user._id;

  try {
    const user = await User.findOne({ _id: userId });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.imageUrl = imageUrl;

    await user.save();

    res.status(200).json({ message: "Image URL updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getUserImage = async (req, res) => {
  try {
   
    const userId = req.user._id;

    const user = await User.findById(userId);
    const imageUrl = user.imageUrl;

    res.json({ imageUrl });
    console.log(imageUrl)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Server error' });
  }
}