import express from "express";
import {
  getCompanyInfo,
  createCompany,
  getAllCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany,
} from "../Controllers/CompanyController.js";
import { protect, checkOwnership } from "../Middlewares/AuthMiddleware.js";

const router = express.Router();

router.route("/your_companies").get(protect, getCompanyInfo);

router.route("/").post(protect, createCompany).get(getAllCompanies);

router
  .route("/:companyId")
  .get(getCompanyById)
  .put(protect, updateCompany)
  .delete(protect, checkOwnership, deleteCompany);

export default router;
