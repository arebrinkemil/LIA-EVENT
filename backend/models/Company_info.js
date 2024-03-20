import mongoose, { model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const CompanyInfoSchema = new mongoose.Schema({
  name: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "can't be blank"],
    match: [/^[a-zA-Z0-9]+$/, "is invalid"],
    index: true,
  },
  about: String,
  contact: String,
});

CompanyInfoSchema.plugin(uniqueValidator, { message: "is already taken." });
const CompanyInfoModel = mongoose.model("company_info", CompanyInfoSchema);

export default CompanyInfoModel;
