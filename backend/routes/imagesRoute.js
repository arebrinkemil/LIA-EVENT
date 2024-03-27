import express from "express";
import {
  uploadImage,
  getImages,
  deleteImage,
} from "../Controllers/ImageController.js";
import { protect, checkOwnership } from "../Middlewares/AuthMiddleware.js";
import { upload } from "../Middlewares/Upload.js";

const router = express.Router();

router
  .route("/:companyId")
  .post(protect, upload.single("logotype"), uploadImage)
  .get(getImages);

router
  .route("/:companyId/:fileName")
  .delete(protect, checkOwnership, deleteImage);

export default router;
