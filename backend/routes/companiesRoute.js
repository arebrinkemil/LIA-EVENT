import express from "express";
import { CompanyInfoModel } from "../models/Company_info.js";
import { userVerification } from "../Middlewares/AuthMiddleware.js";

const router = express.Router();

// Route for Save a new Company
router.post("/", userVerification, async (request, response) => {
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

//route for getting all companies in database
router.get("/", async (request, response) => {
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

// Route for Getting One Company from database by id
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const company = await CompanyInfoModel.findById(id);

    return response.status(200).json(company);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Updateing a Company
router.put("/:id", async (request, response) => {
  try {
    if (!request.body.name || !request.body.about || !request.body.contact) {
      return response.status(400).send({
        message: "Send all required fields: name, about, contact",
      });
    }

    const { id } = request.params;

    const result = await Company.findByIdAndUpdate(id, request.body);

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

// Route for Deleteing a Company
router.delete("/:id", async (request, response) => {
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

export default router;
