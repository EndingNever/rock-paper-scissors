import './App.css';
import PlayField from './components/PlayField/PlayField';
import Score from './components/Score';
import Rules from './components/rules/Rules';
import { useContext } from 'react';
import ScoreContext from './store/score-context';

function App() {
  const scoreCtx = useContext(ScoreContext)
  return (
  <div className='app-container'>
      <Score/>
      <PlayField />
      <Rules />
    </div>
  );
}

export default App;
