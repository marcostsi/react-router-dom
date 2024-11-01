import CtaSection from "./cta.section";

const data = [
  {
    imageSrc: "/react-router-dom.png",
    imageAlt: "Reactjs",
    title: "Construindo navegação eficiente e fácil com o React Router DOM",
    description: "O React Router DOM permite que você crie uma navegação eficiente em aplicações de página única (SPA) no React. Com ele, é possível conectar diferentes componentes e gerenciar a experiência de navegação sem recarregar a página.",
    linkTo: "/pagina-a",
    linkText: "Página A"
  },
   {
    imageSrc: "/fogo.png",
    imageAlt: "Outlet",
    title: "Utilizando Outlet para rotas aninhadas",
    description: "O React Router DOM fornece o componente `<Outlet />` para renderizar rotas aninhadas dentro de um componente pai. Isso permite uma estrutura mais modular e organizada, onde você pode dividir sua aplicação em seções menores e mais gerenciáveis. Por exemplo, ao definir uma rota pai, você pode renderizar diferentes componentes filhos em diferentes partes do layout, mantendo uma navegação clara e consistente.",
    linkTo: "/pagina-b",
    linkText: "Página B"
  },
];

export const SectionCssInJS = () => {
  return (
    <section className="bg-gray-900 pt-20 pb-24 text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h2 className="font-semibold text-3xl lg:text-4xl">
          Navegação com{" "}
          <span className="text-yellow-300">React Router DOM</span> no React
        </h2>
        <CtaSection data={data} />
      </div>
    </section>
  );
};
