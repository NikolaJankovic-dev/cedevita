import React from 'react'
import style from './Start.module.css'

const Start = ({setPhase}) => {
  return (
    <div className={style.start}>
        <button onClick={()=>{setPhase(2)}}></button>
    </div>
  )
}

export default Start