import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import ScoreContext from '../../store/score-context';
import style from './Styles.module.css'

const PlayField = () => {
  // const [playerHand, setPlayerHand] = useState(null);
  const scoreCtx = useContext(ScoreContext);

  useEffect(() => {
    // setPlayerHand("rock")
    // console.log(scoreCtx.playerChoice);
  }, [])

  console.log(scoreCtx.playerSelectedHand)
  {scoreCtx.playerSelectedHand == false ?
      <div className={style.playfield}>
        <img className={style.bgImage} src={process.env.PUBLIC_URL + "/images/bg-triangle.svg"} alt="" />
        {/* Rock */}
        <div onClick={() => scoreCtx.setPlayerHand("rock")} className={style.rockGradient}>
          <div className={style.rockContainer}>
            <span className={style.circle}>
              <img src={process.env.PUBLIC_URL + "/images/icon-rock.svg"} alt="" />
            </span>
          </div>
        </div>

        {/* Paper */}
        <div onClick={() => scoreCtx.setPlayerHand("paper")} className={style.paperGradient}>
          <div className={style.paperContainer}>
            <span className={style.circle}>
              <img src={process.env.PUBLIC_URL + "/images/icon-paper.svg"} alt="" />
            </span>
          </div>
        </div>

        {/* Scissors */}
        <div onClick={() => scoreCtx.setPlayerHand("scissors")} className={style.scissorGradient}>
          <div className={style.scissorContainer}>
            <span className={style.circle}>
              <img src={process.env.PUBLIC_URL + "/images/icon-scissors.svg"} alt="" />
            </span>
          </div>
        </div>
      </div>
      : <div > selected</div>
  }
}

export default PlayField;
