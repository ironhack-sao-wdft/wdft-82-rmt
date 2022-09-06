import axios from "axios";

import { useState, useEffect } from "react";

export function Works() {
  const [movies, setMovies] = useState([]);

  //   useEffect(() => {
  //     axios
  //       .get(
  //         "https://api.themoviedb.org/3/discover/movie?api_key=c269035a4f5d8d6e7508f78ac76cf557"
  //       )
  //       .then((res) => {
  //         console.log(res);
  //         setMovies(res.data.results);
  //       });
  //   }, []);

  useEffect(() => {
    async function exemplo() {
      const httpReq = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=c269035a4f5d8d6e7508f78ac76cf557"
      );

      setMovies([...httpReq.data.results]);
    }
    exemplo();
  }, []);

  return (
    <>
      {movies.map((currentMovie) => {
        return <h1>{currentMovie.original_title}</h1>;
      })}
    </>
  );
}

// Formas de usar o useEffect:

// Sem um segundo parametro
// useEffect(() => {})
// Vai executar toda vez que o componente for atualizado

// Com um segundo parametro
//useEffect(() => {}, [])
// O segundo parametro do useEffect é uma array que pode ter elementos ou não
// Se a array tiver vazia, o useEffect so acontece na montagem do componente
// Se a array tiver algum elemento dentro, quando esse elemento mudar de valor, o useEffect é executado novamente
