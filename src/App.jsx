import React from "react";
import Navber from "./components/shared/Navber";
import Banner from "./components/Banner";
import Products from "./components/products/products";

const App = () => {
  return (
    <div>
      <Navber />
      <Banner />
      <Products />
    </div>
  );
};

export default App;
