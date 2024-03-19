import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose, { model } from "mongoose";
import cors from "cors";
import EmployeeModel from "./models/User.js";

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(mongoDBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("The password is incorrect");
      }
    } else {
      res.json("No record existed");
    }
  });
});

app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
