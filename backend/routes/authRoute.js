import { registration,login, logout, googleLogin ,adminLogin} from "../controllers/authController.js";
import express from 'express'
const router=express.Router()
router.post("/registration",registration)
router.post("/login",login)
router.get("/logout",logout)
router.post("/googlelogin",googleLogin)
router.post("/adminlogin",adminLogin)
export default router