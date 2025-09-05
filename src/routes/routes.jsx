import { createBrowserRouter } from "react-router";

import MainLayout from "../layout/MainLayout";
import App from "../App";
import Contact from "../Components/Contact";
// import About from "../Components/About";
import Products from "../components/products/products";
import ProductCard from "../components/products/ProductCard";
import ProductsDetaile from "../Components/ProductsDetails";
import ProductsDetails from "../Components/ProductsDetails";
import About from "../Components/Products/About";
import Login from "../Components/Login";

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
        path: "/products",
        element: <Products />,
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
        path : "login",
        element : <Login />,
      }
    ],
  },
]);
