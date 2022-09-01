import { Card } from "./components/Card";
import { Form } from "./components/Form";
import movies from "./data";

import { useState } from "react";

function App() {
  const [movieList, setMovieList] = useState(
    movies.map((currentMovie) => {
      return {
        title: currentMovie.original_title,
        description: currentMovie.description,
        img: `https://image.tmdb.org/t/p/w500${currentMovie.poster_path}`,
      };
    })
  );

  const [form, setForm] = useState({
    title: "",
    description: "",
    img: "",
    // endereço: { rua: "", n: 0, CEP: 40000000 },
  });

  return (
    <div>
      <Form
        form={form}
        setForm={setForm}
        setMovieList={setMovieList}
        movieList={movieList}
      />

      {movieList.map((currentMovie) => {
        return (
          <Card
            key={currentMovie.title}
            title={currentMovie.title}
            description={currentMovie.description}
            img={currentMovie.img}
          />
        );
      })}
    </div>
  );
}

export default App;
