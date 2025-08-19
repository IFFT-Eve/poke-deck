interface PokemonBaseResponse<T> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[]
}

interface PokemonURLType {
    name: string;
    url: string;
}

interface Pokemon {
    sprites: {
        other: {
            showdown: {
                front_default: string
            }
        }
    }
}

interface PokemonTypeResponse {
    pokemon: {
        slot: number;
        pokemon: PokemonURLType
    }[]
}