import { Link } from "react-router-dom";
import CtaSection from "./cta.section";

export const SectionCssInJS = () => {
  return (
    <section className="bg-gray-900 pt-20 pb-24 text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h2 className="font-semibold text-3xl lg:text-4xl">
          Navegação com{" "}
          <span className="text-yellow-300">React Router DOM</span> no React
        </h2>

        <CtaSection />
      </div>
    </section>
  );
};
