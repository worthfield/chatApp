import { Router } from "express";
import userCtrl from "../controllers/user.controller.js";
import requireSignin from "../middleware/requireSignin.js";
const router = Router();
router.route("/").get(requireSignin, userCtrl.getUsers);
export default router;
