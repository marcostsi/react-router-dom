export default function PokemonCard({ pokemon }) {
  return (
    <div className="my-8 max-w-sm rounded-lg shadow bg-zinc-900 border-zinc-700">
      <img
        className="rounded-t-lg"
        src={pokemon.image}
        alt={`Imagem de ${pokemon.name}`}
      />
      <div className="p-5 gap-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <strong>{pokemon.name}</strong>.
        </h5>
        <p className="text-zinc-400">Tipo: {pokemon.type}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae consequuntur perspiciatis impedit? Aperiam veritatis
          quasi voluptate eaque pariatur quisquam velit hic molestiae?
        </p>
        <a
          href="#"
          className="inline-flex w-full items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Pokédex
        </a>
      </div>
    </div>
  );
}