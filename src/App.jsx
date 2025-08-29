import React from "react";
import Navber from "./components/shared/Navber";
import Banner from "./components/Banner";
import Products from "./components/products/products";
import About from "./Components/Products/About";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div>
      {/* <Navber /> */}
      <Navber />
      <Banner />
      <Products />

      {/* <Contact /> */}
    </div>
  );
};

export default App;
