import './App.css';
import PlayField from './components/PlayField/PlayField';
import Score from './components/Score';
import Rules from './components/rules/Rules';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Battlefield from './components/BattleField/Battlefield';

function App() {
  return (
    <div className='app-container'>
      <Score />
      {/* <PlayField /> */}
      <Battlefield />
      <Rules />
    </div>
  );
}

export default App;
