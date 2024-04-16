import express from "express";
import "dotenv/config";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouth from "./routes/AuthRoute.js";
import imagesRoute from "./routes/imagesRoute.js";

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
    origin: "http://134.122.48.238",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(cookieParser());

const uploadsDir = path.join(__dirname, "/uploads");
console.log("Serving static files from:", uploadsDir);
app.use("/uploads", express.static(uploadsDir));
app.use(express.json());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome");
});

app.use("/", authRouth);
app.use("/companies", companiesRoute);
app.use("/image", imagesRoute);
