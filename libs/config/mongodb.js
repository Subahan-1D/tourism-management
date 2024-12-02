// getting-started.js
import mongoose, { connections } from "mongoose";

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    return true;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Mongodb Connected successfully");
    return true;
  } catch (err) {
    console.log(err.message);
  }
};

export default connectDB;
