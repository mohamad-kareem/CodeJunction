const { Configuration, OpenAIApi } = require('openai');
const User = require("../models/userModel");

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);


const analyzeCode = async (req, res) => {
    try {
        const { code } = req.body;
        const prompt = `
        Just give me a single score between 1 and 5 its hard to get 5 unless the code is very good,
        Please assign a score between 0 and 4 points where 0 indicates poor quality and 4 indicates excellent quality depending on the following criteria:
        important--> error:if any error in the code then the score is equal 0.
        Syntax: the code must use correct syntax and formatting Is it easy to read and understand if not then a low score will be assigned.
        Structure:the code must be organized in a logical and clear manner and the functions, loops, and conditionals used appropriately if not low score as well.
        Functionality: the code must correctly perform its intended task and there must be clear from bugs or errors if not low score else high score
        Readability: the code must be easy to read and comprehend and the variable names and comments descriptive and helpful if yes hight score else low score.
        important--> Length:Is the code short or big if short (less than 4 words then score=1) else you decide.
        the response must be Just the score without any more word for example score:1 or score:2 or score:3 or score:4 or score 5 !!
        \
        here is the python code :
        ${code}
        \
        
        `;

        const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: prompt,
        max_tokens: 2000,
        temperature: 0.1,
        });

        const answer = response.data.choices[0].text.trim();

        const userId = req.user._id;
        const user = await User.findById(userId);
        user.points += 1;
        await user.save();

        res.json({ answer });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    };
};

const adviceCode = async (req, res) => {
    try {
      const { code } = req.body;
      const prompt = `
      In not more than 21 words but not less than 15 (between 15 and 20 where every 6 words in a line)=>Please analyze the following code and provide advice to improve it you can use this criteria:
      important--> error:if any error in the code then give an advice to improve it.
      Syntax: the code must use correct syntax and formatting Is it easy to read and understand if not give a proper advice.
      Structure:the code must be organized in a logical and clear manner and the functions, loops, and conditionals used appropriately if not give an advice.
      Functionality: the code must correctly perform its intended task and there must be clear from bugs or errors if not give suggestion and advice.
      Readability: the code must be easy to read and comprehend and the variable names and comments descriptive and helpful if not give proper advice and suggestions.

        \
      python code:
        ${code}
        \
      }`;
  
      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: prompt,
        max_tokens: 2000,
        temperature: 0.8,
      });
  
      const answer = response.data.choices[0].text.trim();
      res.json({ answer });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
};
module.exports = {analyzeCode,adviceCode};