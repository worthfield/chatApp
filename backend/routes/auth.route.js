import express from 'express'
import authCtrl from '../controllers/auth.controller.js'
const router = express.Router();
router.route('/signup').post(authCtrl.signUp);
router.route('/signin').post(authCtrl.signIn);
router.route('/signout').post(authCtrl.signOut);
export default router;