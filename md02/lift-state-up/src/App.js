import { PokemonList } from "./components/PokemonList";
import { PokemonInfo } from "./components/PokemonInfo";

import { useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState(undefined);

  return (
    <div className="App d-flex">
      <PokemonList setPokemon={setPokemon} />
      <PokemonInfo pokemon={pokemon} />
    </div>
  );
}

export default App;
