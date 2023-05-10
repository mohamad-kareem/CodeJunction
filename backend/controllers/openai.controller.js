const { Configuration, OpenAIApi } = require('openai');
const User = require("../models/userModel");
const { analyzeCodePrompt, adviceCodePrompt ,autoCorrectPrompt} = require("../AiPromt/AiPromt")

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

const analyzeCode = async (req, res) => {
    try {
        const { code } = req.body;
        console.log(code)
        const prompt = analyzeCodePrompt(code);
        console.log(prompt)
        const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: prompt,
        max_tokens: 3000,
        temperature: 0.6,
        n:1
        });

        const answer = response.data.choices[0].text.trim();
        console.log(answer)
        const score = answer.match(/\d+/);
        if(score){
          const numericScore = parseInt(score[0]);
          const userId = req.user._id;
          const user = await User.findById(userId);
          user.points += numericScore;
          await user.save();
          res.json({ answer :numericScore});
        }else {
          res.status(500).json({ message: 'Unable to extract score from OpenAI response' });
        }
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    };
};

const adviceCode = async (req, res) => {
    try {
      const { code } = req.body;
      const prompt = adviceCodePrompt(code);
  
      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: prompt,
        max_tokens: 3000,
        temperature: 0.6,
      });
  
      const answer = response.data.choices[0].text.trim();
      res.json({ answer });
    }catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
};



const autoCorrect = async (req,res)=>{
  try{
    const {code,outputValue} = req.body;
    const decodedOutputValue = decodeURIComponent(outputValue);
    console.log(decodedOutputValue)
    const prompt = autoCorrectPrompt(code,decodedOutputValue)

    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 3000,
      temperature: 0.6,
    })
    const correctedCode = response.data.choices[0].text.trim();
    res.json({correctedCode})
  }catch(error){
    console.error(error);
    res.status(500).json({message:'server error'})
  }
}
module.exports = {analyzeCode,adviceCode,autoCorrect};