import React from 'react'
import style from './Score.module.css'

const Score = ({points, setPhase}) => {
  return (
    <div className={style.score}>
        <div>0{points}</div>
        <button onClick={()=>setPhase(1)}></button>
    </div>
  )
}

export default Score