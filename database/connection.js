const mongoose = require("mongoose");

const connection = async() => {
    try {
        await mongoose.connect("mongodb://localhost:27017/myblog");
    } catch (error) {
        throw new Error("Failed to connect");
    }
}

module.exports = (
    connection
)