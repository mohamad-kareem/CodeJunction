const mongoose = require("mongoose");

const DailyValueSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now,
        unique: true,
    },
    value: {
        type: Number,
        required: true,
        default: 0,
    },
});

const DailyValue = mongoose.model("WebsiteDailyValue", DailyValueSchema);

module.exports = DailyValue;
