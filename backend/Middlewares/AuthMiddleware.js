import User from "../models/User.js";
import "dotenv/config";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import CompanyInfoModel from "../models/Company_info.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.TOKEN_KEY);

      req.user = await User.findById(decoded.userId).select("-password");

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

const checkOwnership = asyncHandler(async (req, res, next) => {
  const company = await CompanyInfoModel.findOne({
    companyId: req.params.companyId,
  });

  console.log(req.params);
  console.log("Company:", company);
  console.log("Owner ID:", req.user._id);
  console.log("Company owner ID:", company.owner_id);

  if (company && String(company.owner_id) === String(req.user._id)) {
    next();
  } else {
    res.status(403);
    throw new Error("Not authorized as owner");
  }
});

export { checkOwnership, protect };
