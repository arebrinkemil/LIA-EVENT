import express from "express";
import "dotenv/config";
import { PORT, mongoDBURL } from "./config.js";
import mongoose, { model } from "mongoose";
import cors from "cors";
// import EmployeeModel from "./models/User.js";
import cookieParser from "cookie-parser";
import authRouth from "./routes/AuthRoute.js";
import companiesRoute from "./routes/companiesRoute.js";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(cookieParser());
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
app.use(express.json());

// app.use("/", authRouth);

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome");
});

app.use("/", authRouth);

app.use("/companies", companiesRoute);
