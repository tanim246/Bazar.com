import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { createBrowserRouter } from "react-router";
// import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Contact from "./Components/Contact.jsx";
import About from "./Components/Products/About.jsx";

// import { RouterProvider } from "react-router";

const routing = createBrowserRouter([
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <RouterProvider router={routing} />
    {/* <RouterProvider router={routing} /> */}
  </StrictMode>
);
