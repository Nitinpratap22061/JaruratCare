const mongoose = require("mongoose");
require("dotenv").config(); // Ensure dotenv is loaded

const connectDB = async () => {
    try {
        console.log("🔍 Attempting to connect to MongoDB...");

        if (!process.env.MONGO_URI) {
            throw new Error("⚠️ MONGO_URI is not defined in the .env file!");
        }

        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB Connected Successfully!");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
