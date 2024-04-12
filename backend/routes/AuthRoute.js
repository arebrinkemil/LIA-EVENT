import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  forgotPassword,
  resetPassword,
} from "../Controllers/AuthController.js";
import { protect } from "../Middlewares/AuthMiddleware.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router.route("/forgotPassword").post(forgotPassword);
router.route("/resetPassword").post(resetPassword);

export default router;
