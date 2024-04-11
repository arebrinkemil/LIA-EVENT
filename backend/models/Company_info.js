import mongoose from "mongoose";
// import uniqueValidator from "mongoose-unique-validator";

const CompanyInfoSchema = mongoose.Schema({
  logotype: String,
  name: {
    type: String,

    required: [true, "can't be blank"],
    match: [/^[a-zA-Z0-9\s]+$/, "is invalid"],
    index: true,
  },
  about: String,
  contact: String,
  owner_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  companyId: String,
  role: {
    type: String,
    enum: ["Webbutvecklare", "Digital Designer"],
    default: "Webbutvecklare",
  },
  amount: Number,
  location: {
    type: String,
    enum: ["Göteborg", "Annan Plats"],
    default: "Göteborg",
  },
  tools: [String],
  url: String,
  task_description: String,
});

// CompanyInfoSchema.plugin(uniqueValidator, { message: "is already taken." });
export const CompanyInfoModel = mongoose.model(
  "company_info",
  CompanyInfoSchema
);

export default CompanyInfoModel;
