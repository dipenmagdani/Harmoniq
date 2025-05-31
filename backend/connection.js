const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const mongoURI = `mongodb+srv://dipenmagdani:${process.env.MONGO_PASS}@harmoniq.qwiowoh.mongodb.net/?retryWrites=true&w=majority&appName=Harmoniq`;

    const conn = await mongoose.connect(mongoURI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);

    // Handle connection events
    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("MongoDB disconnected");
    });
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    // Exit process with failure if initial connection fails
    process.exit(1);
  }
};

module.exports = connectDB;
