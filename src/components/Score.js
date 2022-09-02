import React from 'react';
import { useContext } from 'react';
import ScoreContext from '../store/score-context';
import './Score.scss'


const Score = () => {
  const scoreCtx = useContext(ScoreContext);

  return (
    <div className='score-container'>
      <div className="hands">
        <h3>ROCK</h3>
        <h3>PAPER</h3>
        <h3>SCISSORS</h3>
      </div>
      <div className="player-score">
        <p>SCORE</p>
        <h1 className='score-number'>{scoreCtx.score}</h1>
      </div>
    </div>
  );
}

export default Score;