import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <h1>Tamo na home!</h1>
      <Link to="/movies">
        <button>Va para outra pagina</button>
      </Link>
    </>
  );
}
