import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center  justify-center">
            <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3">
              <img src="vite.svg" className="h-8" alt="Exemplo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                Exemplo
              </span>
            </Link>
          </div>
          <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
          <span className="block text-sm  sm:text-center text-gray-400">
            © {new Date().getFullYear()}{" "}
            <Link to="/" className="hover:underline">
              Igor&Kayo™
            </Link>
          </span>
        </div>
      </footer>
    </>
  );
}
