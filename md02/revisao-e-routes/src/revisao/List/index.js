import { Card } from "../Card";

export function List(props) {
  const { movies, changeCurrentMovie } = props;

  function handleButton(currentMovie) {
    changeCurrentMovie({ ...currentMovie });
  }

  return (
    <>
      {movies.map((currentMovie) => {
        return <Card moviesInfo={currentMovie} handleButton={handleButton} />;
      })}
    </>
  );
}
