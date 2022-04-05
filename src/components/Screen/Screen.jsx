import React, { useEffect, useState } from "react";
import Level1 from "../Level1/Level1";
import GameOver from "../GameOver/GameOver";

import style from "./Screen.module.css";
import Timer from "./Timer";

const Screen = ({ setPoints, setPhase }) => {
  const [gameOver, setGameOver] = useState(false);
  const [timesUp, setTimesUp] = useState(null);
  useEffect(() => {
    if (gameOver) {
      setTimesUp(<GameOver />);
    } else {
      setTimesUp(null);
    }
  }, [gameOver]);
  return (
    <div className={style.screen}>
      <Timer setPhase={setPhase} setGameOver={setGameOver}/>
      <Level1 setPoints={setPoints} />
      {timesUp}
    </div>
  );
};

export default Screen;
