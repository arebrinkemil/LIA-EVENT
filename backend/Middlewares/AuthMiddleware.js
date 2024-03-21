import User from "../models/User.js";
import "dotenv/config";
import jwt from "jsonwebtoken";

export const userVerification = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    res.json({ status: false });
    return next();
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      res.json({ status: false });
      return next();
    } else {
      const user = await User.findById(data.id);
      if (user) {
        res.json({ status: true, user: user.username });
        return next();
      } else {
        res.json({ status: false });
        return next();
      }
    }
  });
};
