import express from "express";
import data from "../data.js";

const foodRouter = express.Router();

//Create

foodRouter.post("/create-food", (req, res) => {
  data.push(req.body);

  return res.json(data);
});

// Read
// foodRouter.get()

// Update
//foodRouter.put()

// Delete
// foodRouter.delete()

export { foodRouter };
