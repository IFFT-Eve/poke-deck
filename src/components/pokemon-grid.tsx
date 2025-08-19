import FooterButton from "./footer-button";
import PokemonCard from "./pokemon-card";
import PokemonTypeCard from "./type-card";

interface Props {
  page: number;
  type: string;
}

const limit = 24;

export default async function PokemonGrid({ page, type }: Props) {
  const fetchPokemons = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${
      (page - 1) * limit
    }&limit=${limit}`
  );
  const fetchTypes = await fetch("https://pokeapi.co/api/v2/type");
  const {
    count,
    results: pokemons,
    next,
    previous,
  }: PokemonBaseResponse<PokemonURLType> = await fetchPokemons.json();
  const { results: types }: PokemonBaseResponse<PokemonURLType> =
    await fetchTypes.json();
  if (type) {
    const fetchPokemonTypes = await fetch(
      `https://pokeapi.co/api/v2/type/${type}`
    );
    const { pokemon }: PokemonTypeResponse = await fetchPokemonTypes.json();
    return (
      <>
        {/* Total Count */}
        <p className="mb-2 text-sm text-gray-600">Total count: {count}</p>

        {/* Types */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          <span className="mr-2 text-sm font-medium">Types:</span>
          {types.map((type) => (
            <PokemonTypeCard key={type.name} {...type} />
          ))}
        </div>

        {/* Pokemon Grid */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {pokemon
            .filter(
              (_, idx) => idx > (page - 1) * limit && idx < page * limit - 1
            )
            .map(({ pokemon }) => {
              const No = pokemon.url.split("/")[6];
              return (
                <div key={pokemon.name} className="flex flex-col items-center">
                  <PokemonCard {...pokemon} />
                  <p className="mt-2 text-sm font-medium capitalize">
                    Number: {No}
                  </p>
                </div>
              );
            })}
        </div>

        {/* Footer button */}
        <FooterButton next={next} previous={previous} />
      </>
    );
  }

  return (
    <>
      {/* Total Count */}
      <p className="mb-2 text-sm text-gray-600">Total count: {count}</p>

      {/* Types */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        <span className="mr-2 text-sm font-medium">Types:</span>
        {types.map((type) => (
          <PokemonTypeCard key={type.name} {...type} />
        ))}
      </div>

      {/* Pokemon Grid */}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {pokemons.map((pokemon) => {
          const No = pokemon.url.split("/")[6];
          return (
            <div key={pokemon.name} className="flex flex-col items-center">
              <PokemonCard {...pokemon} />
              <p className="mt-2 text-sm font-medium capitalize">
                Number: {No}
              </p>
            </div>
          );
        })}
      </div>

      {/* Footer button */}
      <FooterButton next={next} previous={previous} />
    </>
  );
}
