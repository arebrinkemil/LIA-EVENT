import express from "express";
import { CompanyInfoModel } from "../models/Company_info.js";

const router = express.Router();

// Route for Save a new Company
router.post("/", async (request, response) => {
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
    };

    const company = await CompanyInfoModel.create(newCompany);

    return response.status(201).send(company);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});
