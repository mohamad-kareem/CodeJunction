const Statistics=require("../models/adminStatistics")

exports.getDailyUsageValue=async (req,res)=>{
    try {

      const currentDate = new Date();
      const month = currentDate.getMonth() + 1; 
  
      const dailyValues = await Statistics.find({
        date: { $regex: `^\\d{4}-${month.toString().padStart(2, '0')}` }
      });

      res.json({ dailyValues });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'server error' });
      }
};