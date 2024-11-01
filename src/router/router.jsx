import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import ErrorPage from "../pages/error-page";
import PaginaA from "../pages/pagina-a";
import PaginaB from "../pages/pagina-b";
import Layout from "../layout/layout";
import Params from "../pages/params";
import QueryParams from "../pages/query-params";

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
      },
      {
        path: "/params/:userId",
        element: <Params/>
      },
      {
        path: "/search",
        element: <QueryParams/>
      }
      //   {
      //     path: "/desenhos",
      //     element: <Desenhos />,
      //   },
    ],
  },
]);

export default router;
