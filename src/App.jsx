import React from "react";

const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100">
      <div className="bg-white p-8 rounded-3xl shadow-[0_15px_25px_rgba(0,0,0,0.15)] w-96 border border-yellow-400">
        <h2 className="text-3xl font-extrabold text-yellow-500 mb-6 text-center">
          তোমার টাইটেল লিখো
        </h2>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="শিরোনাম লিখুন"
            className="bg-gray-50 border-2 border-yellow-300 rounded-xl p-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
          />
          <textarea
            rows="4"
            placeholder="শিরোনাম লিখুন"
            className="bg-gray-50 border-2 border-yellow-300 rounded-xl p-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-white py-3 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg"
          >
            জমা দিন

          </button>
        </form>

        <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-yellow-300 shadow-inner">
          <h3 className="text-lg font-bold text-yellow-500">Title</h3>
          <p className="text-gray-700 mt-1">Description goes here...</p>
        </div>
      </div>
    </div>
  );
};

export default App;
