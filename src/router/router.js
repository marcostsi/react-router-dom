import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home.js";
import NotFound from "../pages/404/NotFound.js";
import Desenhos from "../pages/desenhos/desenhos.js"

const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
              path: "/",
              element: <Home />,
            },  {
                path: "/desenhos",
                element: <Desenhos />,
              },
          ],
    },
  

    {
        path: "*",
        element: <NotFound/>
    },

]);

export default router;