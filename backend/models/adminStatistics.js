const mongoose = require("mongoose");

const DailyValueSchema = new mongoose.Schema({
    date: {
        type: Date,
        unique:true,
        required: true,
    },
    value: {
        type: Number,
        default: 0,
    },
});

const DailyValue = mongoose.model("DailyValue", DailyValueSchema);

module.exports = DailyValue;
