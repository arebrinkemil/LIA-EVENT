import mongoose from "mongoose";
// import uniqueValidator from "mongoose-unique-validator";

const CompanyInfoSchema = mongoose.Schema({
  logotype: String,
  name: {
    type: String,
    lowercase: true,
    // unique: true,
    required: [true, "can't be blank"],
    match: [/^[a-zA-Z0-9]+$/, "is invalid"],
    index: true,
  },
  about: String,
  contact: String,
  owner_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  companyId: String,
});

// CompanyInfoSchema.plugin(uniqueValidator, { message: "is already taken." });
export const CompanyInfoModel = mongoose.model(
  "company_info",
  CompanyInfoSchema
);

export default CompanyInfoModel;
