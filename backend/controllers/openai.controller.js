const { Configuration, OpenAIApi } = require('openai');
const User = require("./models/userModel");

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);