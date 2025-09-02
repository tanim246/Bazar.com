import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductsDetails = () => {
  const { id } = useParams();
  const paramId = Number(id);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://dummyjson.com/products");
      setProduct(
        response?.data?.products?.find((product) => product?.id === paramId)
      );
    };
    fetchData();
  }, [paramId]);

  console.log(product);

  //  console.log(paramId)
  return (
    <div className=" mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-lg p-6">
       
        <div className="flex flex-col items-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="rounded-xl w-full max-h-[400px] object-contain"
          />
        </div>

    
        <div className="space-y-5">
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <p className="text-gray-500">Brand: {product.brand}</p>
          <p className="text-gray-400 text-sm">Category: {product.category}</p>

          {/* Price Section */}
          <div className="flex items-center gap-4">
            <p className="text-2xl font-bold text-pink-600">${product.price}</p>
            <span className="text-sm text-gray-500 line-through"></span>
          </div>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed">{product.description}</p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => document.getElementById("my_modal_2").showModal()}
              className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-xl transition"
            >
              Add to Cart
            </button>
            <button className="border border-pink-600 hover:bg-pink-50 text-pink-600 px-6 py-2 rounded-xl transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
