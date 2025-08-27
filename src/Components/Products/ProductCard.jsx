import React from "react";
import Cong from "./Cong";
// import Cong from "./Cong";


const ProductCard = ({ product }) => {
  const { title, description, discount, price, thumbnail } = product;
  return (
    <div>
      <div className="card bg-white shadow-xl rounded-2xl overflow-hidden transition-all duration-300">
        {/* Image */}
        <figure>
          <img
            src={thumbnail}
            alt={title}
            className="rounded-t-2xl object-cover h-52 "
          />
        </figure>

        {/* Card Body */}
        <div className="card-body text-black">
          {/* Title & Discount */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="card-title font-bold">{title}</h2>
            <div className="badge bg-pink-500 text-white w-10 rounded-full h-10 shadow">
              {discount}-25%
            </div>
          </div>

          {/* Description */}
          <p className="text-black text-sm">{description}</p>

          {/* Price */}
          <span className="font-semibold text-lg mt-2 block">
            💖 Price: {price} $
          </span>

          {/* Buttons */}
          <div className="flex flex-col space-y-3 mt-4">
            <button
              onClick={() => document.getElementById("my_modal_2").showModal()}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold shadow-md"
            >
              Buy Now
            </button>
            <button className="w-full py-3 rounded-xl border border-pink-500 text-pink-600 font-semibold bg-pink-50">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <Cong />
    </div>
  );
};

export default ProductCard;
