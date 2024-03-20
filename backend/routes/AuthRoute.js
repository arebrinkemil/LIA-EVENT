import { Login, Signup } from "../Controllers/AuthController.js";
import express from "express";
import { userVerification } from "../Middlewares/AuthMiddleware.js";

const router = express.Router();

router.post("/", userVerification);
router.post("/signup", Signup);
router.post("/login", Login);

export default router;
