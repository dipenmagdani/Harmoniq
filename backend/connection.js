const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb+srv://dipenmagdani:${process.env.MONGO_PASS}@cluster0.fy4qiio.mongodb.net/harmoniq`
    );
    console.log("Connect to DB Successfully!");
  } catch (e) {
    console.log(e);
  }
};

module.exports = connectDB;
