import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function BeerPage() {
  const params = useParams();
  //   console.log(params);

  const [beer, setBeer] = useState({});

  useEffect(() => {
    axios
      .get(`http://ironrest.herokuapp.com/mocked-beers/${params.beerId}`)
      .then((res) => {
        setBeer(res.data);
      });
  }, []);

  return <h1>{beer.name}</h1>;
}
