const mongoose = require("mongoose")
const carSchema = mongoose.Schema({
    Name: String,
    Company: String,
    Price: String
})
module.exports = mongoose.model("Car", carSchema)


// We can seed the collection if needed on server start
async function recreateDB() {
    // Delete everything
    await car.deleteMany();
    let instance1 = new car({
        name: "Rouge",
        Company: "Nissan",
        Price: "$24000"
    });
    let instance2 = new car({
        name: "Tahoe",
        Company: "Chevrolet",
        Price: "$49000"
    });
    let instance3 = new car({
        name: "Santa Fe",
        Company: "Hyundai",
        Price: "$28000"
    });
}