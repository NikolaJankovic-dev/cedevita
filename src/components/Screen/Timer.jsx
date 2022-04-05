import React, { useEffect, useState } from "react";
import style from "./Timer.module.css";

const Timer = ({ setPhase, setGameOver }) => {
  const [countDown, setCountDown] = useState(60);
  const [time, setTime] = useState(`1:00`);
  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDown - 1);
    }, 1000);
    if (countDown === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [countDown]);
  useEffect(() => {
    if (countDown === 60) {
      setTime(`1:00`);
    } else if (countDown < 10) {
      setTime(`0:0${countDown}`);
    } else {
      setTime(`0:${countDown}`);
    }
    
  }, [countDown]);
  useEffect(() => {
    if (countDown === 0) {
      setGameOver(true);
      const timer = setTimeout(() => {
        setGameOver(false);
        setPhase(3);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [countDown]);

  return <div className={style.timer}>{time}</div>;
};

export default Timer;
