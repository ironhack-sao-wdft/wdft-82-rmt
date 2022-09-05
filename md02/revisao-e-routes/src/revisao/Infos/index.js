import { useParams } from "react-router-dom";
import moviesDB from "../../movies";

export function Infos() {
  const params = useParams();

  console.log(typeof params.id);

  return (
    <h1>
      {moviesDB
        .filter((currentMovie) => currentMovie.id === Number(params.id))
        .map((currentMovie) => (
          <h1>{currentMovie.original_title}</h1>
        ))}
    </h1>
  );
}
