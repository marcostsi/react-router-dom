import { Link } from "react-router-dom";

export default function CtaSection() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 items-center py-16">
      <img
        className="w-full lg:w-1/2"
        src="/react-router-dom.png"
        alt="Dashboard de navegação"
      />
      <div className="text-left lg:w-1/2">
        <h3 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white">
          Construindo navegação eficiente e fácil com o React Router DOM
        </h3>
        <p className="mb-6 text-gray-500 dark:text-gray-400">
          O React Router DOM permite que você crie uma navegação eficiente em
          aplicações de página única (SPA) no React. Com ele, é possível
          conectar diferentes componentes e gerenciar a experiência de navegação
          sem recarregar a página.
        </p>
        <Link
          to="/pagina-a"
          className="inline-flex items-center text-white bg-zinc-700 hover:bg-zinc-600 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Página A
          <svg
            className="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}
