import mongoose from "mongoose";
const UserSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    cartData:{
        type:Object,
        default:{}
    }

},{timestamps:true,minimize:false})
const USER=mongoose.model("USER",UserSchema);
export default USER;