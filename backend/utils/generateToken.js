import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.TOKEN_KEY, {
    expiresIn: "30d",
  });

  res.cookie("jwt", token, {
    httpOnly: false,
    secure: false, //sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    sameSite: "none",
  });
};

export default generateToken;
