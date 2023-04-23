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
    const user = req.user;
    const codes = user.codes;
    console.log(codes,user)
    res.status(200).json({ codes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}



exports.addCode = async(req,res) =>{

    const {userId}= req.params;
    const {title,description,code} = req.body;

    try {
        const user = await User.findById(userId)

        if (!user){
            return res.status(404).json({message:"user not found"})
        }
        const Code={
            title:title,
            description:description,
            createdAt: Date.now(),
            code:code
        };

        user.codes.push(Code);//name of the schema codes
        await user.save();
        console.log(Code)
        res.status(201).json(Code);
       
    }
    catch(error){
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

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
  
  