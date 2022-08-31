import './App.css';
import PlayField from './components/PlayField/PlayField';
import Score from './components/Score';
import Rules from './components/rules/Rules';

function App() {
  return (
  <div className='app-container'>
      <Score/>
      <PlayField />
      <Rules />
    </div>
  );
}

export default App;
