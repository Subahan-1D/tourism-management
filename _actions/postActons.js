"use server";
import postModel from "../libs/models/postModel";
import connectDB from "../libs/config/mongodb";

export async function getPost() {
  try {
    await connectDB();
    const data = JSON.parse(JSON.stringify(await postModel.find()));
    console.log(data);
    return { data };
  } catch (error) {
    return { errMsg: error.message };
  }
}
