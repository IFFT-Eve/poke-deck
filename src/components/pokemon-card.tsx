"use client";

import { useEffect, useState } from "react";

export default function PokemonCard({ name, url }: PokemonURLType) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(url);
        const data: Pokemon = await response.json();
        setPokemon(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPokemon();
  }, [url]);

  return (
    <div>
      <p className="mt-2 text-sm font-medium capitalize">{name}</p>
      {pokemon && (
        <img
          width={35}
          height={53}
          className="h-24 w-24 object-contain"
          src={pokemon.sprites.other.showdown.front_default}
          alt={name}
        />
      )}
    </div>
  );
}
