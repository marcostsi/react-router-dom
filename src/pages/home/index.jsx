import HeroPage from "../../components/hero";
import { SectionCssInJS } from "../../components/section.two";

export default function Home() {
  return (
    <>
      <HeroPage />
      <SectionCssInJS />
      <section className="bg-[#39455e] relative">
        <div className="container mx-auto pt-[160px] pb-6 flex flex-col items-center">
          <img
            src="/lapras.png"
            alt="Yums the panda riding a rocket"
            className="absolute top-[-90px] left-1/2 transform -translate-x-1/2 w-[300px] h-[300px]"
          />

          <div className="flex flex-col items-center gap-6 mt-[100px]">
            <span className="text-4xl font-bold tracking-tight text-center text-white">
              Tipos de rotas <br />
              do React Router dom
            </span>

            <div className="flex flex-col w-full gap-4 sm:flex-row sm:justify-center">
              <a
                href="/"
                className="w-full sm:w-[240px] bg-yellow-400 text-black text-lg py-3 px-4 rounded text-center font-semibold hover:bg-yellow-500 transition-all"
              >
                Use Params
              </a>
              <a
                href="/"
                className="w-full sm:w-[240px] bg-black text-white text-lg py-3 px-4 rounded text-center font-semibold hover:bg-gray-800 transition-all"
              >
                Query
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
