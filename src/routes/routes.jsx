import { createBrowserRouter } from "react-router";

import MainLayout from "../layout/MainLayout";
import App from "../App";
import Contact from "../Components/Contact";
import ProductCard from "../components/products/ProductCard";
import Products from "../components/products/products";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path : "/products",
        element: <Products />
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
