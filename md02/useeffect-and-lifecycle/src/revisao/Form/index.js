import { useState } from "react";

export function Form(props) {
  const [form, setForm] = useState({
    original_title: "",
    popularity: 0,
    overview: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleAddMovie(e) {
    e.preventDefault();

    props.attList([form, ...props.movies]);
  }

  return (
    <form onSubmit={handleAddMovie}>
      <label htmlFor="movie-title">Nome do Filme: </label>
      <input
        id="movie-title"
        type="text"
        name="original_title"
        value={form.original_title}
        onChange={handleChange}
      />

      <label htmlFor="movie-popularity">Popularidade: </label>
      <input
        id="movie-popularity"
        type="number"
        name="popularity"
        value={form.popularity}
        onChange={handleChange}
      />

      <label htmlFor="movie-overview">Descrição: </label>
      <input
        id="movie-overview"
        type="text"
        name="overview"
        value={form.overview}
        onChange={handleChange}
      />

      <button type="submit" className="btn btn-primary">
        Adicionar
      </button>
    </form>
  );
}
