import express from "express";
import "dotenv/config";
import { PORT, mongoDBURL } from "./config.js";
import mongoose, { model } from "mongoose";
import cors from "cors";
// import EmployeeModel from "./models/User.js";
import cookieParser from "cookie-parser";
import authRouth from "./routes/AuthRoute.js";
const app = express();

mongoose.connect(mongoDBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(cookieParser());

app.use(express.json());

app.use("/", authRouth);
