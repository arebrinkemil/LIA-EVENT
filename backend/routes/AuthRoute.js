import { Login, Signup, Logout } from "../Controllers/AuthController.js";
import express from "express";
import { userVerification } from "../Middlewares/AuthMiddleware.js";

const router = express.Router();

router.post("/", userVerification);
router.post("/signup", Signup);
router.post("/login", Login);
router.get("/logout", Logout);

export default router;
