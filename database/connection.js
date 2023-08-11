const mongoose = require("mongoose");

const connection = async() => {
    try {
        await mongoose.connect("mongodb://localhost:27017/my_blog");
    } catch (error) {
        Error("Failed to connect");
    }
}

module.exports = (
    connection
)