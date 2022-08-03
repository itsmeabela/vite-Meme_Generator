import React, { useState } from "react";
import MemeData from "../MemeData";

export default function Meme() {
  const [isMemes, setMemes] = React.useState(
    "https://i.imgflip.com/30b1gx.jpg"
  );
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  function saveText(e) {
    const { name, value } = e.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  console.log(meme);

  const [allMemeImages, setallMemesImages] = useState(MemeData);

  function getimg() {
    const memesArr = MemeData.data.memes;
    let randomNum = Math.floor(Math.random() * memesArr.length);
    const { url } = memesArr[randomNum];
    setMeme((prev) => ({
      ...prev,
      randomImage: url,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          onChange={saveText}
          value={meme.topText}
          name="topText"
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          onChange={saveText}
          value={meme.bottomText}
          name="bottomText"
        />
        <button className="form--button" onClick={getimg}>
          Get a new meme image 🎭
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
