import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "./config/config.js";
const generatehashedPassword = (plaintext) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(plaintext, salt);
  return hash;
};
const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, config.JWTSECRET, {
    expiresIn: "15d",
  });
  res.cookie("token", token, {
    httpOnly: true,
  });
};
export { generatehashedPassword,generateToken };
