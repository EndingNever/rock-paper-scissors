import React from 'react';
import './Score.scss'


const Score = () => {
  return (
    <div className='score-container'>
      <div className="hands">
        <h3>ROCK</h3>
        <h3>PAPER</h3>
        <h3>SCISSORS</h3>
      </div>
      <div className="player-score">
        <p>SCORE</p>
        <h1 className='score-number'>12</h1>
      </div>
    </div>
  );
}

export default Score;
