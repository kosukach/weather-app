const mongoose = require("mongoose");

const daySchema = new mongoose.Schema({
    dayName: {

    },
    tempRange: {
        type: String,
        required: true
    },
    sunRise: {
        type: String,
        required: true
    },
    sunSet: {
        type: String,
        required: true
    },
    wind: {
        type: String,
        required: true
    },
    humidity: {
        type: String,
        required: true
    }
})

const Day = mongoose.model("Days", daySchema);

module.exports = Day