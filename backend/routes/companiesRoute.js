import express from "express";
import {
  getCompanyInfo,
  createCompany,
  getAllCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany,
} from "../Controllers/CompanyController.js";
import { protect } from "../Middlewares/AuthMiddleware.js";

const router = express.Router();

router.route("/your_companies").get(protect, getCompanyInfo);

router.route("/").post(protect, createCompany).get(getAllCompanies);

router
  .route("/:id")
  .get(getCompanyById)
  .put(protect, updateCompany)
  .delete(protect, deleteCompany);

export default router;
