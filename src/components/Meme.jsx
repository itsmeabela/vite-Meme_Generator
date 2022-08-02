import React, { useState } from "react";
import MemeData from "../MemeData";

export default function Meme() {
  const [isMemes, setMemes] = React.useState(
    "https://i.imgflip.com/30b1gx.jpg"
  );
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
  });
  const [allMemeImages, setallMemesImages] = useState(MemeData);

  function getimg() {
    const memesArr = MemeData.data.memes;
    let randomNum = Math.floor(Math.random() * memesArr.length);
    const url = memesArr[randomNum];
    setMeme((prev) => ({
      ...prev,
      randomImage: url,
    }));
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button className="form--button" onClick={getimg}>
          Get a new meme image 🎭
        </button>
      </div>
      <img src={meme.randomImage} className="meme-img" alt="" />
    </main>
  );
}
