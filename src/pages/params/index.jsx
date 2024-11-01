import { Link, useParams } from "react-router-dom";

export default function Params() {
  let { userId } = useParams();

  return (
    <div className="min-h-screen bg-zinc-800 flex items-center justify-center px-4">
      <div className="max-w-2xl bg-zinc-900 shadow-md rounded-lg p-6 space-y-6 py-16">
        <h1 className="text-3xl font-bold text-zinc-200"> Route Parameters</h1>
        <p className="text-zinc-400">
          Exemplo de <strong>Route Parameters</strong>
          funcionam no React Router. Um Route Parameter permite que você capture
          partes dinâmicas da URL, como IDs ou slugs.
        </p>

        <p className="text-zinc-500">
          O ID do usuário que você acessou é:{" "}
          <span className="font-semibold text-zinc-200">{userId}</span>. Isso
          significa que, ao navegar para uma URL como{" "}
          <code className="text-zinc-300">/params/{userId}</code>, o valor{" "}
          <code className="text-zinc-300">{userId}</code> é capturado e se torna
          disponível no seu componente.
        </p>

        <p className="text-zinc-400">
          Com o uso de Route Parameters, você pode construir aplicações mais
          dinâmicas e interativas, adaptando o conteúdo exibido com base nas
          informações passadas pela URL.
        </p>

        <Link
          to="/"
          className="mx-auto inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Voltar para a Página Inicial
        </Link>
      </div>
    </div>
  );
}
