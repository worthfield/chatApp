import { Router } from "express";
import requireSignin from "../middleware/requireSignin.js";
import msgCtrl from "../controllers/message.controller.js";
const router = Router();
router.route("/send/:id").post(requireSignin, msgCtrl.sendMessages);
router.route("/:id").get(requireSignin, msgCtrl.getMessage);
export default router;
