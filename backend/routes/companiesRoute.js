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
import { upload } from "../Middlewares/Upload.js";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import fs from "fs";
import CompanyInfoModel from "../models/Company_info.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

router.route("/your_companies").get(protect, getCompanyInfo);

router.route("/").post(protect, createCompany).get(getAllCompanies);

router
  .route("/:id")
  .get(getCompanyById)
  .put(protect, updateCompany)
  .delete(protect, deleteCompany);

router.post("/upload/:companyId", upload.single("logotype"), (req, res) => {
  if (!req.file) {
    return res.status(400).send({ message: "No file uploaded" });
  }

  const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${
    req.params.companyId
  }/${req.file.filename}`;

  res.status(200).json({
    message: "File uploaded successfully",
    fileName: req.file.originalname,
    fileUrl: fileUrl,
  });
});

router.get("/upload/:companyId", (req, res) => {
  const { companyId } = req.params;
  const dirPath = path.resolve(__dirname, `../uploads/${companyId}`);

  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return res.status(500).json({ message: "Unable to scan directory" });
    }

    const fileUrls = files.map(
      (file) =>
        `${req.protocol}://${req.get("host")}/uploads/${companyId}/${file}`
    );
    res.status(200).json(fileUrls);
  });
});

router.delete("/upload/:companyId/:fileName", async (req, res) => {
  const { companyId, fileName } = req.params;
  const filePath = path.resolve(
    __dirname,
    `../uploads/${companyId}/${fileName}`
  );

  fs.unlink(filePath, async (err) => {
    if (err) {
      return res.status(500).json({ message: "Unable to delete file" });
    }

    try {
      await CompanyInfoModel.updateOne(
        { companyId: companyId },
        { $set: { logotype: "" } }
      );
      res
        .status(200)
        .json({ message: "File and database reference deleted successfully" });
    } catch (dbErr) {
      res.status(500).json({ message: "Unable to delete database reference" });
    }
  });
});

export default router;
