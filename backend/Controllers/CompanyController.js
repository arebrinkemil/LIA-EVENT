import User from "../models/User.js";
import CompanyInfoModel from "../models/Company_info.js";
import asyncHandler from "express-async-handler";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

import generateToken from "../utils/generateToken.js";

import bcrypt from "bcryptjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getCompanyInfo = asyncHandler(async (req, res) => {
  const companyInfo = await CompanyInfoModel.find({
    owner_id: req.user._id,
  });

  if (companyInfo) {
    res.json(companyInfo);
  } else {
    res.status(404);
    throw new Error("Company info not found");
  }
});

const createCompany = asyncHandler(async (request, response) => {
  try {
    if (!request.body.name || !request.body.about || !request.body.contact) {
      return response.status(400).send({
        message: "Send all required fields: name, about us, contact",
      });
    }

    const newCompany = {
      logotype: request.body.logotype,
      name: request.body.name,
      about: request.body.about,
      contact: request.body.contact,
      owner_id: request.body.owner_id,
      companyId: request.body.companyId,
      // Check if optional fields are provided in the request body
      role: request.body.role,
      amount: request.body.amount,
      location: request.body.location,
      tools: request.body.tools,
      url: request.body.url,
      task_description: request.body.task_description,
    };

    const company = await CompanyInfoModel.create(newCompany);

    return response.status(201).send(company);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

const getAllCompanies = asyncHandler(async (request, response) => {
  try {
    const companies = await CompanyInfoModel.find({});

    return response.status(200).json({
      count: companies.length,
      data: companies,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

const getCompanyById = asyncHandler(async (request, response) => {
  try {
    const { companyId } = request.params;

    const company = await CompanyInfoModel.findById(companyId);

    return response.status(200).json(company);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

const updateCompany = asyncHandler(async (request, response) => {
  try {
    if (!request.body.name || !request.body.about || !request.body.contact) {
      return response.status(400).send({
        message: "Send all required fields: name, about, contact",
      });
    }

    const { companyId } = request.params;

    const result = await CompanyInfoModel.findByIdAndUpdate(
      companyId,
      request.body
    );

    if (!result) {
      return response.status(404).json({ message: "Company not found" });
    }

    return response
      .status(200)
      .send({ message: "Company updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

const deleteCompany = asyncHandler(async (request, response) => {
  try {
    console.log(request.params);
    const { companyId } = request.params;

    const result = await CompanyInfoModel.findOneAndDelete({
      companyId: companyId,
    });

    if (!result) {
      return response.status(404).json({ message: "Company not found" });
    }

    const dirPath = path.resolve(__dirname, `../uploads/${companyId}`);
    fs.rmdir(dirPath, { recursive: true }, (err) => {
      if (err && err.code !== "ENOENT") {
        throw err;
      }
    });

    return response
      .status(200)
      .send({ message: "Company and associated files deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export {
  getCompanyInfo,
  createCompany,
  getAllCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany,
};
