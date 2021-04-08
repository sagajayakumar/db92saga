const mongoose = require("mongoose")
const carSchema = mongoose.Schema({
    Name: String,
    Company: String,
    Price: String
})
module.exports = mongoose.model("Car", carSchema)