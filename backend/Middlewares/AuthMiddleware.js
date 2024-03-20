import User from "../models/User.js";
import "dotenv/config";
import jwt from "jsonwebtoken";

export const userVerification = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    } else {
      const user = await User.findById(data.id);
      if (user) {
        req.user = user;
        next();
      } else {
        return res.json({ status: false });
      }
    }
  });
};
