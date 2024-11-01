import { Link } from "react-router-dom";

export default function PaginaB() {
  return (
    <div className="min-h-screen bg-zinc-800 flex items-center justify-center px-4">
      <div className="max-w-2xl bg-zinc-900 shadow-md rounded-lg p-6 space-y-6 py-16">
        <h1 className="text-3xl font-bold text-zinc-200">Rota página B</h1>
        <p className="text-zinc-400">
          Esta é a página B, criada para demonstrar como funciona a navegação entre rotas usando React Router. Explore os links abaixo para acessar outras páginas.
        </p>

        <div className="flex space-x-4 mb-10">
          <Link
            to="/pagina-c"
            className="text-blue-500 bg-zinc-50 px-5 py-2 rounded-md hover:text-blue-700 font-medium transition"
          >
            Ir para Página c
          </Link>
          <Link
            to="/pagina-a"
            className="text-blue-500 hover:text-blue-700 font-medium transition"
          >
            Voltar para página A
          </Link>
        </div>

        <Link
          to="/"
          className="mx-auto inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Voltar para Home
        </Link>
      </div>
    </div>
  );
}
