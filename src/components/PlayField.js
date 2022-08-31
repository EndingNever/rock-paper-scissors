import React from 'react';
import style from './Styles.module.css'

const PlayField = () => {
  return (
    <div className={style.playfield}>
      <img src={process.env.PUBLIC_URL + "/images/bg-triangle.svg"} alt="" />
      <div className={style.rockContainer}>
        <span className={style.circle}>
          <img src={process.env.PUBLIC_URL + "/images/icon-rock.svg"} alt="" />
        </span>
      </div>
      <div className={style.paperContainer}>
        <span className={style.circle}>
          <img src={process.env.PUBLIC_URL + "/images/icon-paper.svg"} alt="" />
        </span>
      </div>
      <div className={style.scissorContainer}>
        <span className={style.circle}>
          <img src={process.env.PUBLIC_URL + "/images/icon-scissors.svg"} alt="" />
        </span>
      </div>
    </div>
  );
}

export default PlayField;
