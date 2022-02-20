import React from "react";

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-[#672280] to-[#A626D3] h-20 flex items-center justify-between p-8 text-white">
      <div className="flex gap-3 items-center">
        <img src="./images/shiba-inu.png" alt="memeicon" className="h-8" />
        <h1 className="font-bold text-3xl">Meme Generator</h1>
      </div>
      <h4 className="font-thin">Fernando Salcedo</h4>
    </div>
  );
}
