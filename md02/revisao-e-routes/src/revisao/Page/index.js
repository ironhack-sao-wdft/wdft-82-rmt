import { useState } from "react";
import moviesDB from "../../movies";
import { List } from "../List";
import { Infos } from "../Infos";
import { Form } from "../Form";

export function Page() {
  const [movies, setMovies] = useState([...moviesDB]);
  const [currentMovie, setCurrentMovie] = useState({});

  return (
    <div className="d-flex">
      <div>
        <List movies={movies} changeCurrentMovie={setCurrentMovie} />
      </div>
      <div>
        <Infos movieTitle={currentMovie} />
        <Form attList={setMovies} movies={movies} />
      </div>
    </div>
  );
}
