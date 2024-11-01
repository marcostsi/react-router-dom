import { Link, useLocation } from "react-router-dom";
import { pokemons } from "../params";
import PokemonCard from "../../components/pokmon-card"; 


export default function QueryParams() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q");

  const foundPokemon = pokemons.find(
    (pokemon) => pokemon.name.toLowerCase() === query?.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-zinc-800 flex flex-col items-center justify-center py-10">
      <h1 className="text-3xl font-bold text-zinc-200 mb-6">
        Resultados da Busca para: {query}
      </h1>
      {foundPokemon ? (
        <PokemonCard pokemon={foundPokemon} /> 
      ) : (
        <p className="text-zinc-400 mb-6">
          Nenhum Pokémon encontrado com o nome: <strong>{query}</strong>.
        </p>
      )}
      <Link
        to="/"
        className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Voltar para Home
      </Link>
    </div>
  );
}
