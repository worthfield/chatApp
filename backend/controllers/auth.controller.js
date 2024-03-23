import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import errorMessage from "../errorHandler.js";
import { generatehashedPassword, generateToken } from "../utils.js";
const signUp = async (req, res, next) => {
  try {
    const { fullname, username, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
      return next(errorMessage(400, "password doesnt match"));
    }
    const hashed_password = generatehashedPassword(password);
    const newUser = new User({
      fullname,
      username,
      password: hashed_password,
    });
    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();
      return res.status(201).json({ message: "User created Succefully!!!" });
    }
  } catch (error) {
    next(error);
  }
};
const signIn = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const matchPassword = await bcrypt.compare(password, user?.password || "");

    if (!user || !matchPassword) {
      return next(errorMessage(400, "Invalid Username or Password"));
    }
    generateToken(user?._id, res);
    return res.status(200).json({ message: "User Signed In Succefully!!!" });
  } catch (error) {
    next(error);
  }
};
const signOut = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Signed out Succefully!!!" });
};
export default { signUp, signIn, signOut };
