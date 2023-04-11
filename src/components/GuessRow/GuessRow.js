import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function GuessRow({ myWord, targetWord }) {
  const myWordLength = myWord.length;
  const myWordAug = checkGuess(myWord, targetWord);
  return (
    <p className="guess">
      {myWord.length > 0
        ? range(myWordLength).map((pos) => (
            <span key={pos} className={`cell ${myWordAug[pos].status}`}>
              {myWordAug[pos].letter}
            </span>
          ))
        : range(5).map((pos) => <span key={pos} className="cell"></span>)}
    </p>
  );
}

export default GuessRow;
