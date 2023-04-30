const Statistics=require("../models/adminStatistics")

exports.getDailyUsageValue=async (req,res)=>{
    try {

        const dailyValues = await Statistics.find({});
    
        const valuesArray = dailyValues.map(({ date, value }) => ({ 
            date: date.toLocaleDateString('en-US', { day: 'numeric', month: 'long' }),
            value
        }));

        res.json(valuesArray);
    
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
      }
};