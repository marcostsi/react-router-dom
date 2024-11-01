import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import ErrorPage from "../pages/error-page";
import PaginaA from "../pages/pagina-a";
import PaginaB from "../pages/pagina-b";
import Layout from "../layout/layout";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pagina-a",
        element: <PaginaA/>
      },
      {
        path: "/pagina-b",
        element: <PaginaB/>
      }
      //   {
      //     path: "/desenhos",
      //     element: <Desenhos />,
      //   },
    ],
  },
]);

export default router;
