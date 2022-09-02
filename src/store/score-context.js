import { createContext, useState } from "react";

const ScoreContext = createContext({ // createContext takes an initial state value
  score: 0,
  playerSelectedHand: false,
  playerChoice: "",
})

export function ScoreContextProvider(props) {
  const [playerScore, setPlayerScore] = useState(0);
  const [playerChoseHand, setPlayerChoseHand] = useState(false);
  const [playerSelect, setPlayerSelect] = useState("");

  const setPlayerHand = (data) => {
    setPlayerSelect(data);
    setPlayerChoseHand(true)
  }

  const playerWon = () => {
    setPlayerScore((prevScore) => prevScore + 1);
  }

  const playerLost = () => {
    if (playerScore == 0) {
      return
    } else if (playerScore > 0) {
      setPlayerScore((prevScore) => prevScore - 1);
    }
  }

  return <ScoreContext.Provider value={{
    score: playerScore,
    playerSelectedHand: playerChoseHand,
    playerChoice: playerSelect,
    setPlayerHand: setPlayerHand,
  }}>
    {props.children}
  </ScoreContext.Provider>
}

export default ScoreContext