import React, { useState } from 'react';
import './App.css';

function App () {

  const [correctGuessCount, setCorrectGuessCount] = useState(0);
  const [wrongGuessCount, setWrongGuessCount] = useState(0);

  function onCorrectAnswer(){
    console.log('Correct!');
    setCorrectGuessCount(correctGuessCount + 1);
  }


  function onWrongAnswer(){
    console.log('Wrong!');
    setWrongGuessCount(wrongGuessCount + 1);
  }


  console.log('correctGuessCount', correctGuessCount);
  console.log('wrongGuessCount', wrongGuessCount);
  console.log('questionsAnswered', questionsAnswered);

  if (correctGuessCount + wrongGuessCount > 4) {
    return (
      <h1 className="Header">
          You got {correctGuessCount}/5 correct! Good job.
      </h1>
    );
  }

  return (
    <div className="QuestionContainer">
      <h1 className="Header">Game of Thrones Trivia</h1>
      <div className="Guesses">
        {
          correctGuessCount > 4 ? (
            <h2>Good Job!</h2>
          ) : (
            null
          )
        }
        Correct guesses: {correctGuessCount}<br />
        Wrong guesses: {wrongGuessCount}
      </div>

      <div className="Question">
        <p className="Question-prompt">How did Daenerys Targaryen eventually hatch her dragon eggs?</p>
        <img className="Question-image" src="https://i.imgur.com/NPTQ1Hv.jpg" alt="dragon eggies" />
        {
          questionsAnswered[0] !== null ? (
            <div className="Question-explanation">
              <h2>{questionsAnswered[0] ? 'Correct' : 'Wrong'}</h2>
              At the end of Season 1, Daenerys Targaryen emerges emerged from the ashes of the fire she had placed her eggs in, holding three newly hatched dragons.
            </div>
          ) : (
            <div className="Question-options">
              <button onClick={() => onWrongAnswer(0)}>1. In a lightning storm</button>
              <button onClick={() => onCorrectAnswer(0)}>2. In a fire</button>
              <button onClick={() => onWrongAnswer(0)}>3. In an omelet</button>
              <button onClick={() => onWrongAnswer(0)}>4. In a frozen cave</button>
            </div>
          )
        }
      </div>

      <div className="Question">
        <p className="Question-prompt">The phrase 'Valar Morghulis' or 'all men must die' is usually responded with:</p>
        <img className="Question-image" src="https://i.imgur.com/zoTroXq.jpg" alt="spooky man" />

        {
          questionsAnswered[1] !== null ? (
            <div className="Question-explanation">
              <h2>{questionsAnswered[1] ? 'Correct' : 'Wrong'}</h2>
              At the end of Season 1, Daenerys Targaryen emerges emerged from the ashes of the fire she had placed her eggs in, holding three newly hatched dragons.
            </div>
          ) : (
            <div className="Question-options">
              <button onClick={() => onCorrectAnswer(1)}>1. Valar Dohaeris or 'all men must serve'</button>
              <button onClick={() => onWrongAnswer(1)}>2. Valar Rohnas or 'all men must live'</button>
              <button onClick={() => onWrongAnswer(1)}>3. Valar GoGo or 'all men must dance'</button>
              <button onClick={() => onWrongAnswer(1)}>4. Valar Kilmer or 'all men must act'</button>
            </div>
          )
        }

      </div>

      <div className="Question">
        <p className="Question-prompt">Besides dragonglass, what is the only other substance capable of defeating White Walkers?</p>
        <img className="Question-image" src="https://i.imgur.com/m0u5VrG.jpg" alt="frosty boye"/>
        {
          questionsAnswered[2] !== null ? (
            <div className="Question-explanation">
              <h2>{questionsAnswered[2] ? 'Correct' : 'Wrong'}</h2>
              Valyrian Steel is not only exceptionally sharp, strong and free of maintenance, but is also capable of taking down an immortal White Walker. The metal is easily identified by its distinctive rippled pattern.
            </div>
          ) : (
            <div className="Question-options">
              <button onClick={() => onWrongAnswer(2)}>1. Weirwood</button>
              <button onClick={() => onWrongAnswer(2)}>2. Wildfire</button>
              <button onClick={() => onCorrectAnswer(2)}>3. Valyrian steel</button>
              <button onClick={() => onWrongAnswer(2)}>4. Snowballs</button>
            </div>
          )
        }
      </div>

      <div className="Question">
        <p className="Question-prompt">Which Stark family direwolf received the penalty for Joffrey being bitten?</p>
        <img className="Question-image" src="https://i.imgur.com/QUkikLL.jpg" alt="doggo" />
        {
          questionsAnswered[3] !== null ? (
            <div className="Question-explanation">
              <h2>{questionsAnswered[3] ? 'Correct' : 'Wrong'}</h2>
              After the direwolf Nymeria flees into the woods following a defensive attack against Prince Joffrey, Queen Cersei Lannister took her wrath out on the sister wolf, Lady.
            </div>
          ) : (
            <div className="Question-options">
              <button onClick={() => onWrongAnswer(3)}>1. Ghost</button>
              <button onClick={() => onCorrectAnswer(3)}>2. Lady</button>
              <button onClick={() => onWrongAnswer(3)}>3. Nymeria</button>
              <button onClick={() => onWrongAnswer(3)}>4. Summer</button>
            </div>
          )
        }

      </div>

      <div className="Question">
        <p className="Question-prompt">What was the name of Ned Stark's greatsword?</p>
        <img className="Question-image" src="https://i.imgur.com/opChkVP.jpg" alt="stay a-head, ned!" />
        {
          questionsAnswered[4] !== null ? (
            <div className="Question-explanation">
              <h2>{questionsAnswered[4] ? 'Correct' : 'Wrong'}</h2>
              Ice was the official sword of the Lord of Winterfell, forged from Valyrian steel and handed down over the ages. After being used to behead Ned Stark at the end of Season 1, it was subsequently melted down to forge two new swords – the Oathkeeper and Widow's Wail.
            </div>
          ) : (
            <div className="Question-options">
              <button onClick={() => onCorrectAnswer(4)}>1. Ice</button>
              <button onClick={() => onWrongAnswer(4)}>2. Oathkeeper</button>
              <button onClick={() => onWrongAnswer(4)}>3. Widow's Wail</button>
              <button onClick={() => onWrongAnswer(4)}>4. Northguard</button>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
