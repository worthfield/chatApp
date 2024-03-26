import mongoose, { Schema } from "mongoose";
const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      min: [6, "password must be atleast 6 characters"],
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
export default User;
