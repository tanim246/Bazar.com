import React from "react";

const Banner = () => {
  return (
    <div>
      <section className="text-black">
        {/* Overlay */}

        <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-3xl font-bold text-black leading-tight">
              Upgrade Your <span className="text-[#de2a8a]">Style</span>
              <br />
              With Our New Collection
            </h1>
            <p className="mt-4 text-[18px] text-black max-w-lg mx-auto md:mx-0">
              Discover the best fashion deals at unbeatable prices. Shop now and
              experience top-quality clothing delivered right to your door.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#shop"
                className="px-6 py-3 bg-[#de2a8a] text-white font-semibold rounded-lg shadow-md hover:bg-[#c91876] transition"
              >
                Shop Now
              </a>
              <a
                href="#categories"
                className="px-6 py-3 border border-black font-semibold rounded-lg hover:border-[#de2a8a] hover:text-[#de2a8a] transition"
              >
                Explore Categories
              </a>
            </div>
          </div>

          {/* Right Product Image */}
        </div>
      </section>
    </div>
  );
};

export default Banner;
