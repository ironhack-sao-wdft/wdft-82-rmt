import express from "express";
import { crudRouter } from "./routes/crud.routes.js";

const app = express();

app.use(express.json());

app.use("/api", crudRouter);

app.listen(4000, () => {
  console.log("Server up and running at port 4000.");
});
