import express from "express";
import { UserModel } from "../models/user.model.js";

export const userRouter = express.Router();

// CREATE USER

userRouter.post("/", async (req, res) => {
  try {
    const createdUser = await UserModel.create(req.body);

    return res.status(201).json(createdUser);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

// READ DETAILS

userRouter.get("/:id", async (req, res) => {
  try {
    console.log("Oi!");
    const user = await UserModel.findOne({ _id: req.params.id });

    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
