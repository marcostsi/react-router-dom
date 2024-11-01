import { Link, useParams } from "react-router-dom";
import PokemonCard from "../../components/pokmon-card";

export const pokemons = [
  { id: 1, name: "Mewtwo", type: "Psychic", image: "/miu.png" },
  { id: 2, name: "Lapras", type: "Gelo", image: "/lapras.png" },
  { id: 3, name: "Charmander", type: "Fogo", image: "/fogo.png" },
];

export default function Params() {
  let { pokemonId } = useParams();

  const foundPokemon = pokemons.find(
    (pokemon) => pokemon.id === parseInt(pokemonId)
  );

  return (
    <div className="min-h-screen py-20 bg-zinc-800 flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl bg-zinc-900 shadow-md rounded-lg p-6 space-y-6 py-16">
        <h1 className="text-3xl font-bold text-zinc-200">Route Parameters</h1>
        <p className="text-zinc-400">
          Exemplo de <strong>Route Parameters</strong> funcionam no React
          Router. Um Route Parameter permite que você capture partes dinâmicas
          da URL, como IDs ou slugs.
        </p>

        <Link
          to="/"
          className="mx-auto inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Voltar para a Página Inicial
        </Link>
      </div>

      {foundPokemon ? (
        <>
          <PokemonCard pokemon={foundPokemon} />
        </>
      ) : (
        <p className="text-zinc-400 mt-20">
          Nenhum Pokémon encontrado com o ID: <strong>{pokemonId}</strong>.
        </p>
      )}
    </div>
  );
}
