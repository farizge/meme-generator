import { useState, useEffect } from "react";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    memeImg: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);

  return (
    <main>
      <div className="form">
        <label for="topText">Top Text</label>
        <input
          name="topText"
          type="text"
          placeholder="Input Top Text"
        />
        <label for="bottomText">Bottom Text</label>
        <input
          name="bottomText"
          type="text"
          placeholder="Input Bottom Text"
        />
        <button>Get New Meme Image</button>
      </div>
      <div className="meme-img">
        <img src={meme.memeImg} />
      </div>
    </main>
  );
};

export default Meme;
