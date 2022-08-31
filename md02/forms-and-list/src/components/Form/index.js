import { useState } from "react";

export function Form() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    img: "",
  });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  }

  return (
    <form>
      <label htmlFor="movie-title">Nome do filme:</label>
      <input
        id="movie-title"
        type="text"
        onChange={handleChange}
        name="title"
      />
      <label htmlFor="movie-description">Descrição:</label>
      <input
        id="movie-description"
        type="text"
        onChange={handleChange}
        name="description"
      />
      <label htmlFor="movie-img">Poster:</label>
      <input id="movie-img" type="text" onChange={handleChange} name="img" />

      <button className="btn btn-primary">Add</button>
    </form>
  );
}
