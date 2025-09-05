import axios from "axios";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response?.data?.products);
    };
    fetchData();
  }, []);

  const clickSearch = (e) => {
    e.preventDefault();
    setProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      )
    );
    setSearch("");
  };

  return (
    <div>
      <div className="pt-5">
        <div className="mt-10 pt-5">
          <h1 className="text-4xl text-center">Trending Products</h1>
          <h1 className="text-xl mt-4 text-center">
            Subscribe to our newsletter for exclusive offers, new arrivals, and
            jewelry care tips
          </h1>
          <div>
            <form
              onSubmit={clickSearch}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center mt-5 mb-9"
            >
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search your Products"
                className="border border-gray-400 rounded-lg outline-pink-500 py-1.5 px-2 w-[340px]"
              />
              <input
                type="submit"
                value="Search"
                className="rounded-lg border-2 border-pink-500 font-semibold text-white bg-pink-500 py-1.5 px-8 cursor-pointer"
              />
            </form>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-6  ">
          {products?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
