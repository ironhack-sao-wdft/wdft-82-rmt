import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "../../components/Card";
import { Link } from "react-router-dom";

export function Home() {
  const [beers, setBeers] = useState([]);

  // A array vazia do useEffect indica que ele vai acontecer quando o componente for montado, apenas.
  useEffect(() => {
    async function fetchBeers() {
      const response = await axios.get(
        "https://ironrest.herokuapp.com/mocked-beers"
      );

      setBeers(response.data);
    }

    fetchBeers();
  }, []);

  return (
    <>
      <Link to="/create-beer">
        <button>Criar uma nova cerveja!</button>
      </Link>
      {beers.map((currentBeer) => {
        return (
          <Card
            name={currentBeer.name}
            style={currentBeer.style}
            description={currentBeer.description}
            id={currentBeer._id}
          />
        );
      })}
    </>
  );
}
