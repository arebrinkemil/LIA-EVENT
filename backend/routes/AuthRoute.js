// const { Signup } = require("../Controllers/AuthController");
// const router = require("express").Router();

import { Signup } from "../Controllers/AuthController.js";
import express from "express";

const router = express.Router();

router.post("/signup", Signup);

export default router;
