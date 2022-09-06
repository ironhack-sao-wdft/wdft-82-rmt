import axios from "axios";
import { useState } from "react";

function App() {
  //GET - Pegar info
  //POST - Enviar infos
  //PATCH e/ou PUT - Alterar infos
  //DELETE - Apagar

  const httpReq = axios
    .get(
      "https://api.themoviedb.org/3/discover/movie?api_key=c269035a4f5d8d6e7508f78ac76cf557"
    )
    .then((res) => {
      const [movies, setMovies] = useState([...res.data.results]);
    })
    .catch((err) => console.log(err));

  console.log(httpReq);

  return <>{movies.map}</>;

  // movie is not defined
}

export default App;
