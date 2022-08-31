import React from 'react';
import style from './Styles.module.scss'
// import triangle from "/images/bg-triangle.svg"

const PlayField = () => {
  return (
    <div className={style.playfield}>
      <img src={process.env.PUBLIC_URL + "/images/bg-triangle.svg"} alt="" />
    </div>
  );
}

export default PlayField;
