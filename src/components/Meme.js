import React from "react";

export default function Meme() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-8">
        <input
          type="text"
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border-2 p-2"
          placeholder="Shut up"
        />
        <input
          type="text"
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border-2 p-2"
          placeholder="and take my money"
        />
      </div>
      <button className="bg-gradient-to-r from-[#672280] to-[#A626D3] w-full h-10 rounded-md drop-shadow-lg text-white">
        Get a new meme image 🖼
      </button>
    </div>
  );
}
