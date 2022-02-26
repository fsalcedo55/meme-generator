import React, { useState } from "react";
import memesData from "../data/memesData";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  // const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg");

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const random = [Math.floor(Math.random() * memesArray.length)];
    const randomURL = memesArray[random].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: randomURL,
      };
    });
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
      <div>
        <img src={meme.randomImage} alt="memeImage" />
      </div>
    </div>
  );
}

/**
 * Challenge: Save the random meme URL in state
 * - Create new state called `memeImage` with an
 *   empty string as default
 * - When the getMemeImage function is called, update
 *   the `memeImage` state to be the random chosen
 *   image URL
 * - Below the div.form, add an <img /> and set the
 *   src to the new `memeImage` state you created
 */
