const { Configuration, OpenAIApi } = require('openai');
const User = require("./models/userModel");

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);


const analyzeCode = async (req, res) => {
    try {
        const { code } = req.body;
        const prompt = `
        give just a score between 1 and 3 where 1 is good ,2 is very good and 3 is excellent.
        
        \
        javascript
        ${code}
        \
        Return response in the following parsable json format:
        {
            ""Answer""
        }`;

        const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: prompt,
        max_tokens: 200,
        temperature: 1,
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

module.exports = {analyzeCode};