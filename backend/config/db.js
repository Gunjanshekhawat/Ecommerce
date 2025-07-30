import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const url=process.env.mongodb_url
const connect=async()=>{
    try
    {
        await mongoose.connect(url)
        console.log("db connected")
    }
    catch(error)
    {
       console.log("db error")
       console.log(error)
    }
}
export default connect;