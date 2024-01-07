import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()


const connectDB = async () => {
  console.log("MONGODB_URI:", process.env.MONGODB_URI);

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("db is connected");
  } catch (error) {
    console.log("no enchufo", error);
  }
};

export default connectDB;