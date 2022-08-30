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
        <p>score</p>
      </div>
    </div>
  );
}

export default Score;
