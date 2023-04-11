import React from 'react';

import { range } from '../../utils';
import GuessRow from '../GuessRow';

function Game({ guessesArray, maxWords, targetWord, gameOver }) {
  console.log(guessesArray);
  console.log(maxWords);
  let numberOfGuesses = guessesArray.length - 1;
  let banner = undefined;
  if (guessesArray[numberOfGuesses] === targetWord) {
    banner = (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {guessesArray.length} guesses</strong>.
        </p>
      </div>
    );
  } else if (guessesArray.length === maxWords) {
    banner = (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{targetWord}</strong>.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="guess-results">
        {guessesArray.map((aGuess, idx) => (
          <GuessRow key={idx} myWord={aGuess} targetWord={targetWord}></GuessRow>
        ))}
        {range(maxWords - guessesArray.length).map((aVal, idx) => (
          <GuessRow key={idx} myWord={''}></GuessRow>
        ))}
      </div>
      {/* <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{guessesArray.length}guesses</strong>.
        </p>
      </div> */}
      {banner}
    </>
  );
}

export default Game;
