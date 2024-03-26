import jwt from "jsonwebtoken";
import config from "../config/config.js";
import errorMessage from "../errorHandler.js";
import User from "../models/user.model.js";
const requireSignin = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) return next(errorMessage(401, "Unauthorized access"));
    const verifyJwt = jwt.verify(token, config.JWTSECRET);
    if (!verifyJwt) return next(errorMessage(400, "Invalid Token"));
    const user = await User.findById(verifyJwt.userId).select("-password");
    if (!user) return next(errorMessage(404, "User not found"));
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
export default requireSignin;
