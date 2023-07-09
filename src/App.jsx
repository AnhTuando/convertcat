import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Checkout from "./routes/Checkout";
import Cats from "./routes/Cats";
import CatsProducts from "./routes/CatsProducts";
import OthersProducts from "./routes/OthersProducts";
import Others from "./routes/Others";
import Index from "./routes/Index";
function App() {
  const categories = {
    foods: "foods",
    toys: "toys",
    clothes: "clothes",
    litter: "litter",
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: "",
      children: [
        { index: true, element: <Index /> },
        { path: `/others/`, element: <Others /> },
        {
          path: "/others/foods",
          element: <Others category={categories.foods} />,
        },
        {
          path: "/others/toys",
          element: <Others category={categories.toys} />,
        },
        {
          path: "/others/clothes",
          element: <Others category={categories.clothes} />,
        },
        {
          path: "/others/litter",
          element: <Others category={categories.litter} />,
        },

        { path: "/cats", element: <Cats /> },
        { path: "/cats/:id", element: <CatsProducts /> },
        {
          path: "/others/litter/:id",
          element: <OthersProducts category={categories.litter} />,
        },
        {
          path: "/others/clothes/:id",
          element: <OthersProducts category={categories.clothes} />,
        },
        {
          path: "/others/toys/:id",
          element: <OthersProducts category={categories.toys} />,
        },
        {
          path: "/others/foods/:id",
          element: <OthersProducts category={categories.foods} />,
        },
        { path: "/checkout", element: <Checkout /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}>
        <Index></Index>
      </RouterProvider>
    </>
  );
}

export default App;
