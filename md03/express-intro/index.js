import express from "express";
import { foodRouter } from "./routes/food.routes.js";

const app = express();

app.use(express.json());

// Mandando algumas reqs para o roteador de foods
// http://localhost:4000/food

app.use("/food", foodRouter);

// Essa parte sempre no final do arquivo, beleza?
app.listen(4000, () => {
  console.log("To rodando tranquilo");
});
