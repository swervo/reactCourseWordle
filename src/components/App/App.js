import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Game from '../Game';
import Header from '../Header';
import GuessControl from '../GuessControl';
import { sample } from '../../utils';
import { WORDS } from '../../data';
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function App() {
  const [currentGuesses, setCurrentGuesses] = React.useState([]);
  const [isGameOver, setIsGameOver] = React.useState(false);
  function handleNextGuess(aGuess) {
    console.log(aGuess);
    const newGuesses = [...currentGuesses];
    newGuesses.push(aGuess);
    setCurrentGuesses(newGuesses);
    if (newGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setIsGameOver(true);
    }
  }
  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game
          guessesArray={currentGuesses}
          maxWords={NUM_OF_GUESSES_ALLOWED}
          targetWord={answer}
          gameOver={isGameOver}
        />
        <GuessControl submitLatestGuess={handleNextGuess} isDisabled={isGameOver} />
      </div>
    </div>
  );
}

export default App;
