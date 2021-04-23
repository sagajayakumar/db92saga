const mongoose = require("mongoose")
const carSchema = mongoose.Schema({
    Name: {
        type: String,
        required: [true, "Name of car can not be blank"]
    },
    Company: {
        type: String,
        required: [true, "car company can not be blank"]
    },
    Price: {
        type: Number,
        required: [true, "Price of the car is required"],
        min: [1000, "car price Should be minimum of $1000 "],
        max: [500000, "car price Cannot be greater than $500000 "]

    }
})
module.exports = mongoose.model("Car", carSchema)