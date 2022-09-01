import { useState } from "react";

export function Form(props) {
  const { form, setForm, setMovieList, movieList } = props;

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  }

  // exemplo de objeto dentro do state, que já é um objeto rs huaasuhashuas
  // function handleEnd(event) {
  //   setForm({
  //     ...form,
  //     endereço: { ...form.endereço, [event.target.name]: event.target.value },
  //   });
  // }

  function handleAddMovies(event) {
    event.preventDefault();
    setMovieList([form, ...movieList]);

    console.log(movieList);
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

      <button onClick={handleAddMovies} className="btn btn-primary">
        Add
      </button>
    </form>
  );
}
