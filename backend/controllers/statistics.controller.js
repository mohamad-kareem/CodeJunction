const Statistics=require("../models/adminStatistics")
const User = require("../models/userModel");
exports.getDailyUsageValue=async (req,res)=>{
    try {

        const dailyValues = await Statistics.find({});
    
        const valuesArray = dailyValues.map(({ date, value }) => ({ 
            date: date.toLocaleDateString('en-US', { day: 'numeric', month: 'long' }),
            value
        }));
        valuesArray.sort((a, b) => new Date(a.date).getMonth() - new Date(b.date).getMonth());

        res.json(valuesArray);
    
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
      }
};

exports.getAllUsersNumber = async (req,res)=>{
    try {
        const count = await User.countDocuments();
        res.status(200).json({ count });
    }catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}