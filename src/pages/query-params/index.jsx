import { Link, useLocation } from "react-router-dom";

export default function QueryParams() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q");

  return (
    <div className="min-h-screen bg-zinc-800 flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold text-zinc-200">
        Resultados da Busca para: {query}
      </h1>
      {query ? (
        <p className="text-zinc-400">
          Aqui estão os resultados para a pesquisa: <strong>{query}</strong>.
        </p>
      ) : (
        <p className="text-zinc-400">Nenhum termo de pesquisa foi fornecido.</p>
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
