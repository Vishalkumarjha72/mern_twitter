import express from "express"
import { signup,login,logout } from "../controllers/authcontrollers.js";

const router = express.Router();

router.get("signup",signup); 
router.get("login",login);
router.get("logout",logout);
export default router;