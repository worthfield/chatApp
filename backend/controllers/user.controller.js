import User from "../models/user.model.js";
const getUsers = async (req, res, next) => {
  try {
    const loggedIn = req.user._id;
    const users = await User.find({
      _id: { $ne: loggedIn },
    }).select("-password");
    if (!users) return next(404, "User not found");
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
export default { getUsers };
