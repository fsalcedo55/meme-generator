import React from "react";
import memesData from "../data/memesData";

export default function Meme() {
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const random = [Math.floor(Math.random() * memesArray.length)];
    // const memesArray = memesData.data.memes.map((meme) => {
    //   console.log(random);
    // });
    const randomURL = memesArray[random].url;
    console.log(randomURL);
  }
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-8">
        <input
          type="text"
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border-2 p-2"
          placeholder="Top text"
        />
        <input
          type="text"
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border-2 p-2"
          placeholder="Bottom text"
        />
      </div>
      <button
        className="bg-gradient-to-r from-[#672280] to-[#A626D3] w-full h-10 rounded-md drop-shadow-lg text-white"
        onClick={getMemeImage}
      >
        Get a new meme image 🖼
      </button>
      {/* <div>{getMemeImage}</div> */}
    </div>
  );
}
