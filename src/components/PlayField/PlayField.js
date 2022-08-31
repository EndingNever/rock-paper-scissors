import React, { useState } from 'react';
import style from './Styles.module.css'

const PlayField = () => {
  const [playerHand, setPlayerHand] = useState(null);

  return (
    <div className={style.playfield}>
      <img className={style.bgImage} src={process.env.PUBLIC_URL + "/images/bg-triangle.svg"} alt="" />
      {/* Rock */}
      <div onClick={() => setPlayerHand("rock")} className={style.rockGradient}>
        <div className={style.rockContainer}>
          <span className={style.circle}>
            <img src={process.env.PUBLIC_URL + "/images/icon-rock.svg"} alt="" />
          </span>
        </div>
      </div>
      {/* Paper */}
      <div onClick={() => setPlayerHand("paper")} className={style.paperGradient}>
        <div className={style.paperContainer}>
          <span className={style.circle}>
            <img src={process.env.PUBLIC_URL + "/images/icon-paper.svg"} alt="" />
          </span>
        </div>
      </div>
      {/* Scissors */}
      <div onClick={() => setPlayerHand("scissors")} className={style.scissorGradient}>
        <div className={style.scissorContainer}>
          <span className={style.circle}>
            <img src={process.env.PUBLIC_URL + "/images/icon-scissors.svg"} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default PlayField;
