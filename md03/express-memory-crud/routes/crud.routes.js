import express from "express";
import { data } from "../data.js";

import { v4 as uuidv4 } from "uuid";

export const crudRouter = express.Router();

// CREATE

crudRouter.post("/", (req, res) => {
  data.push({ id: uuidv4(), data: req.body });

  return res.status(201).json(data[data.length - 1]);
});

// READ ALL

crudRouter.get("/", (req, res) => {
  return res.status(200).json(data);
});

// READ DETAILS

crudRouter.get("/:id", (req, res) => {
  // Dentro de req.params temos um objeto onde as chaves são os nomes dos parametros, no caso, id. E o value é o que foi preenchido quando a rota foi chamada.

  const item = data.filter(
    (currentItem) => currentItem.id === req.params.id
  )[0];

  return res.status(200).json(item);
});

// UPDATE

crudRouter.put("/:id", (req, res) => {
  data.forEach((currentItem, i) => {
    if (currentItem.id === req.params.id) {
      data[i].data = req.body;
    }
  });

  const item = data.filter(
    (currentItem) => currentItem.id === req.params.id
  )[0];

  return res.status(200).json(item);
});

// DELETE

crudRouter.delete("/:id", (req, res) => {
  let index = 0;

  data.forEach((currentItem, i) => {
    if (currentItem.id === req.params.id) {
      index = i;
    }
  });

  data.splice(index, 1);

  return res.status(200).json("Item removido!");
});
