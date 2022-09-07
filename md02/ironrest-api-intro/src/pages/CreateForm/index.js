import style from "./style.module.css";
import { useState } from "react";
import axios from "axios";

export function CreateForm() {
  const [form, setForm] = useState({
    name: "",
    logo: "",
    ibu: "",
    country: "",
    style: "",
    abv: "",
    description: "",
    ideal_temp: "",
    year: "",
    pair: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const post = await axios.post(
      "http://ironrest.herokuapp.com/mocked-beers",
      form
    );

    console.log(post);
  }

  return (
    <form className={style.container} onSubmit={handleSubmit}>
      <label htmlFor="beer-name">Nome da cerveja:</label>
      <input
        type="text"
        id="beer-name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />

      <label htmlFor="beer-logo">URL do logo:</label>
      <input
        type="text"
        id="beer-logo"
        name="logo"
        value={form.logo}
        onChange={handleChange}
      />

      <label htmlFor="beer-IBU">IBU:</label>
      <input
        type="text"
        id="beer-IBU"
        name="ibu"
        value={form.ibu}
        onChange={handleChange}
      />

      <label htmlFor="beer-country">Pais:</label>
      <input
        type="text"
        id="beer-country"
        name="country"
        value={form.country}
        onChange={handleChange}
      />

      <label htmlFor="beer-style">Estilo:</label>
      <input
        type="text"
        id="beer-style"
        name="style"
        value={form.style}
        onChange={handleChange}
      />

      <label htmlFor="beer-ABV">ABV:</label>
      <input
        type="text"
        id="beer-ABV"
        name="abv"
        value={form.abv}
        onChange={handleChange}
      />

      <label htmlFor="beer-description">Descrição:</label>
      <input
        type="text"
        id="beer-description"
        name="description"
        value={form.description}
        onChange={handleChange}
      />

      <label htmlFor="beer-temp">Temperatura ideal:</label>
      <input
        type="text"
        id="beer-temp"
        name="ideal_temp"
        value={form.ideal_temp}
        onChange={handleChange}
      />

      <label htmlFor="beer-year">Ano:</label>
      <input
        type="text"
        id="beer-year"
        name="year"
        value={form.year}
        onChange={handleChange}
      />

      <label htmlFor="beer-pair">Harmonização:</label>
      <input
        type="text"
        id="beer-pair"
        name="pair"
        value={form.pair}
        onChange={handleChange}
      />

      <button>Enviar</button>
    </form>
  );
}
