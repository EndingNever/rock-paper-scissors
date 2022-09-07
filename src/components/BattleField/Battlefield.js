import React from 'react';
import style from '../PlayField/Styles.module.css'
import battle from './Battlefield.module.css'

const rock = {
    image: "/images/icon-rock.svg",
    gradient: battle.rockGradient,
  };

const paper = {
  image: "/images/icon-paper.svg",
  gradient: battle.paperGradient,
};

const scissors = {
  image: "/images/icon-scissors.svg",
  gradient: battle.scissorGradient,
}


const Battlefield = () => {
  return (
    <div className={battle.playfield}>
      <div className={`${scissors.gradient} ${battle.playerHandPosition}`}>
        <div className={battle.handContainer}>
          <span className={battle.circle}>
            <img src={process.env.PUBLIC_URL + scissors.image} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Battlefield;
