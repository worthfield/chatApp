import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
    fullname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})
const User = mongoose.model('User',userSchema)
export default User;