import { useState, useEffect } from "react";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    memeImg: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    async function getMemesData() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemesData();
  }, []);

  const getMemeImage = () => {
    const randomNum = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNum].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      memeImg: url,
    }));
    console.log(allMemes);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  return (
    <main>
      <div className="form">
        <input
          name="topText"
          type="text"
          placeholder="Top Text"
          onChange={handleChange}
          value={meme.topText}
        />
        <input
          name="bottomText"
          type="text"
          placeholder="Bottom Text"
          onChange={handleChange}
          value={meme.bottomText}
        />
        <button onClick={getMemeImage}>Get New Meme Image</button>
      </div>
      <div className="meme-img">
        <img src={meme.memeImg} />
        <h3 className="top memeText">{meme.topText}</h3>
        <h3 className="bottom memeText">{meme.bottomText}</h3>
      </div>
    </main>
  );
};

export default Meme;
