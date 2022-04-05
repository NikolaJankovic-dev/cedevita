import React from 'react'
import style from './Country.module.css'

const Country = ({phase, setPhase, setCountry}) => {
    const handleClick = (e) => {
        setCountry(e.target.id);
        setPhase(1);
    }
  return (
    <div className={style.country}>
        <button className={style.cro} id="cro" onClick={handleClick}></button>
        <button className={style.slo} id="slo" onClick={handleClick}></button>
        <button className={style.srb} id="srb" onClick={handleClick}></button>
        <button className={style.bih} id="bih" onClick={handleClick}></button>
        <button className={style.mac} id="mac" onClick={handleClick}></button>
        <button className={style.mne} id="mne" onClick={handleClick}></button>
    </div>
  )
}

export default Country