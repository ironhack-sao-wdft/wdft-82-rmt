import { Card } from "./components/Card";
import { Form } from "./components/Form";
import movies from "./data";

function App() {
  return (
    <div>
      <Form />

      {movies.map((currentMovie) => {
        return (
          <Card
            key={currentMovie.id}
            title={currentMovie.original_title}
            description={currentMovie.overview}
            img={`https://image.tmdb.org/t/p/w500${currentMovie.poster_path}`}
          />
        );
      })}
    </div>
  );
}

export default App;
