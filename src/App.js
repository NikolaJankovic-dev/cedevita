import { useEffect, useState } from "react";
import style from "./App.module.css";
import Country from "./components/Country/Country";
import Level1 from "./components/Level1/Level1";
import Score from "./components/Score/Score";
import Screen from "./components/Screen/Screen";
import Start from "./components/Start/Start";


function App() {

  const [phase, setPhase] = useState(0);
  const [country, setCountry] = useState(null);
  const [points, setPoints] = useState(0);
  const [component, setComponent] = useState(<Country phase={phase} setPhase={setPhase}/>)
  useEffect(() => {
    if (phase === 0) {
      setComponent(<Country phase={phase} setPhase={setPhase} setCountry={setCountry}/>);
    }
    if (phase === 1) {
      setComponent(<Start phase={phase} setPhase={setPhase} />);
    }
    if (phase === 2) {
      setComponent(<Screen phase={phase} setPhase={setPhase} setCountry={setCountry} setPoints={setPoints}/>);
    } 
    if (phase === 3) {
      setComponent(<Score phase={phase} setPhase={setPhase} points={points}/>);
    }
  }, [phase]);

  return (
    <div className={style.App}>
      <div className={style.bg}>
        {component}
      </div>
    </div>
  );
}

export default App;
