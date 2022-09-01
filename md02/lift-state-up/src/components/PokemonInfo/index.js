export function PokemonInfo(props) {
  const { pokemon } = props;

  console.log(pokemon);

  return (
    <>
      {pokemon ? (
        <div>
          <h1>{pokemon.name.english}</h1>
          {pokemon.type.map((currentType) => {
            return <p>{currentType}</p>;
          })}
          <h2>Status</h2>
          <strong>HP</strong> <span>{pokemon.base.HP}</span>
          <strong>Attack</strong> <span>{pokemon.base.Attack}</span>
          <strong>Defense</strong> <span>{pokemon.base.Defense}</span>
          <strong>Speed</strong> <span>{pokemon.base.Speed}</span>
        </div>
      ) : (
        <h1>Escolha um pokemon ao lado!</h1>
      )}
    </>
  );
}
