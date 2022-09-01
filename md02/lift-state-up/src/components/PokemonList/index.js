import pokemons from "../../data";

export function PokemonList(props) {
  function handlePokemon(pokemon) {
    props.setPokemon(pokemon);
  }

  return (
    <div>
      {pokemons.map((currentPokemon) => {
        return (
          <button
            className="btn btn-primary d-flex m-1"
            onClick={() => {
              handlePokemon(currentPokemon);
            }}
          >
            {currentPokemon.name.english}
          </button>
        );
      })}
    </div>
  );
}
