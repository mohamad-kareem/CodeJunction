const mongoose = require("mongoose");

mongoose.connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
const db = mongoose.connection;
db.on('error', (err) => console.error(err),"errorrrr")

db.once('open', () => console.log("MongoDB connected successfully!"))