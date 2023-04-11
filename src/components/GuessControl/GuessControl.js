import React from 'react';

function GuessControl({ submitLatestGuess, isDisabled }) {
  console.log(isDisabled);
  const [guess, setGuess] = React.useState('');
  function submitGuess(e) {
    if (guess.length !== 5) {
      return;
    }
    e.preventDefault();
    // assuming it passes all tests
    // send it up
    submitLatestGuess(guess);
    setGuess('');
  }
  function checkGuess(e) {
    const guessWord = e.target.value;
    setGuess(guessWord.toUpperCase());
  }
  return (
    <form className="guess-input-wrapper" onSubmit={submitGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        maxLength={5}
        minLength={5}
        value={guess}
        onChange={checkGuess}
        disabled={isDisabled}
      />
    </form>
  );
}

export default GuessControl;
