import { Link } from "react-router-dom";

export default function HeroPage() {
  return (
    <section class="bg-zinc-900">
      <div class="flex flex-col-reverse lg:flex-row max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16">
        <div class="mr-auto max-w-4xl place-self-center text-center lg:text-left">
          <h1 class="max-w-2xl mb-4 text-3xl font-bold tracking-tight md:text-4xl xl:text-5xl text-white">
            Integrando Rotas com React Router DOM
          </h1>
          <p class="max-w-2xl mb-6 font-light lg:mb-8 text-zinc-400 md:text-lg lg:text-xl">
            Aprenda a navegar entre páginas e construir uma experiência fluida
            para seus usuários com o React Router DOM.
          </p>
          <div class="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              to="#"
              class="bg-blue-700 hover:bg-primary-800 text-white font-medium rounded-lg px-5 py-3 text-center focus:ring-4 focus:ring-primary-300"
            >
              Iniciar Tutorial
            </Link>
            <a
              href="https://reactrouter.com/en/main"
              target="_blank"
              class="text-zinc-900 dark:text-white font-medium border border-zinc-300 dark:border-zinc-700 rounded-lg px-5 py-3 text-center hover:bg-zinc-50 dark:hover:bg-zinc-700 focus:ring-4 focus:ring-zinc-100 dark:focus:ring-zinc-800"
            >
              Documentação
            </a>
          </div>
        </div>
        <div class="flex justify-center lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://panda-css.com/panda-bubble-tea.svg"
            alt="Demonstração do React Router"
            class="max-w-xs lg:max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
