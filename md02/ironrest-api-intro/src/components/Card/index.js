import { Link } from "react-router-dom";
export function Card(props) {
  const { name, style, description, id } = props;

  return (
    <div>
      <h1>{name}</h1>
      <h3>{style}</h3>
      <p>{description}</p>
      <Link to={`/${id}`}>
        <button>Saiba mais!</button>
      </Link>
    </div>
  );
}
