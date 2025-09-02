import React from "react";

const ProductAboutText = () => {
  return (
    <div className="container mx-auto p-6 space-y-10">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">
          About the Product
        </h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
          The <strong>Eyeshadow Palette with Mirror</strong> by Glamour Beauty
          is designed for those who love to create stunning eye looks
          effortlessly. Featuring a versatile range of shades, it allows you to
          go from subtle day looks to bold evening styles. The built-in mirror
          makes it convenient for on-the-go application, ensuring you look
          perfect anytime, anywhere.
        </p>
      </div>

      {/* Product Philosophy */}
      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
        <h2 className="text-2xl font-semibold text-pink-600 mb-3">
          Product Philosophy
        </h2>
        <p className="text-gray-700 leading-relaxed">
          At Glamour Beauty, we prioritize quality, usability, and style. Each
          product is crafted to enhance your natural beauty, offering
          long-lasting wear and vibrant pigmentation. This palette is perfect
          for makeup enthusiasts and professionals alike, making beauty
          accessible and enjoyable for everyone.
        </p>
      </div>

      {/* Additional Info */}
      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
        <h2 className="text-2xl font-semibold text-pink-600 mb-3">
          Why Choose This Product
        </h2>
        <p className="text-gray-700 leading-relaxed">
          This eyeshadow palette combines quality, convenience, and versatility.
          It comes with a mirror for easy application, a carefully selected
          range of shades to suit all occasions, and a durable, stylish design.
          Whether for personal use or as a gift, this palette delivers
          exceptional value and beauty in every application.
        </p>
      </div>
    </div>
  );
};

export default ProductAboutText;
