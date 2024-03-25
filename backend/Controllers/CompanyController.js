import User from "../models/User.js";
import CompanyInfoModel from "../models/Company_info.js";
import asyncHandler from "express-async-handler";

import generateToken from "../utils/generateToken.js";

import bcrypt from "bcryptjs";

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
      name: request.body.name,
      about: request.body.about,
      contact: request.body.contact,
      owner_id: request.body.owner_id,
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
    const { id } = request.params;

    const company = await CompanyInfoModel.findById(id);

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

    const { id } = request.params;

    const result = await CompanyInfoModel.findByIdAndUpdate(id, request.body);

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
    const { id } = request.params;

    const result = await Company.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "Company not found" });
    }

    return response
      .status(200)
      .send({ message: "Company deleted successfully" });
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
