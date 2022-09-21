import express from "express";

import * as dotenv from "dotenv";
dotenv.config();

import { dbConnect } from "./config/db.config.js";
dbConnect();

import { userRouter } from "./routes/user.routes.js";

const app = express();

app.use(express.json());

// VARIAVEL DE AMBIENTE

app.use("/user", userRouter);

app.listen(Number(process.env.PORT), () => {
  console.log(`Server up at port ${process.env.PORT}`);
});
