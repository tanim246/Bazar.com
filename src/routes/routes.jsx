import { createBrowserRouter } from "react-router";

import MainLayout from "../layout/MainLayout";
import App from "../App";
import Contact from "../Components/Contact";
import ProductsDetails from "../Components/ProductsDetails";
import About from "../Components/Products/About";
import Login from "../Components/Login";
import Product from "../Components/Products/Product";

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
        path: "/product",
        element: <Product />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/products-details/:id",
        element: <ProductsDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
