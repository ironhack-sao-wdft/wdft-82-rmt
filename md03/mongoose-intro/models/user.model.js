import { Schema, model } from "mongoose";

const userSchema = new Schema({
  // Aqui dentro a gente vai "desenhar" a estrutura dos dados que vão ser guardados nessa coleção

  userName: { type: String, required: true },
  email: {
    type: String,
    required: true,
    match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm,
  },
  password: { type: String, required: true },
});

const UserModel = model("User", userSchema);

export { UserModel };
