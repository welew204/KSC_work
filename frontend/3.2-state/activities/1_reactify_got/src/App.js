import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

/* See instructions.md for full instructions! */

function App() {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);

  function onCorrect() {
    setCorrectAnswers((prev) => (prev += 1));
    return alert("Correct!");
  }
  function onWrong() {
    setWrongAnswers((prev) => (prev += 1));
    return alert("Wrong");
  }

  return (
    <div className='App'>
      <div class='QuestionContainer'>
        <h1 class='Header'>Game of Thrones Trivia</h1>
        <div>CORRECT: {correctAnswers}</div>
        <div>WRONG: {wrongAnswers}</div>

        <div class='Question'>
          <p class='Question-prompt'>
            How did Daenerys Targaryen eventually hatch her dragon eggs?
          </p>
          <img class='Question-image' src='https://i.imgur.com/NPTQ1Hv.jpg' />

          <div class='Question-options'>
            <button onClick={() => onWrong()}>1. In a lightning storm</button>
            <button onClick={() => onCorrect()}>2. In a fire</button>
            <button onClick={() => onWrong()}>3. In a omelet</button>
            <button onClick={() => onWrong()}>4. In a frozen cave</button>
          </div>

          <p class='Question-explanation'>
            At the end of Season 1, Daenerys Targaryen emerges emerged from the
            ashes of the fire she had placed her eggs in, holding three newly
            hatched dragons.
          </p>
        </div>

        <div class='Question'>
          <p class='Question-prompt'>
            The phrase 'Valar Morghulis' or 'all men must die' is usually
            responded with:
          </p>
          <img class='Question-image' src='https://i.imgur.com/zoTroXq.jpg' />

          <div class='Question-options'>
            <button onClick={() => onCorrect()}>
              1. Valar Dohaeris or 'all men must serve'
            </button>
            <button onClick={() => onWrong()}>
              2. Valar Rohnas or 'all men must live'
            </button>
            <button onClick={() => onWrong()}>
              3. Valar GoGo or 'all men must dance'
            </button>
            <button onClick={() => onWrong()}>
              4. Valar Kilmer or 'all men must act'
            </button>
          </div>

          <p class='Question-explanation'>
            The Season 2 finale was named "Valar Morghulis" while the Season 3
            premiere was named "Valar Dohaeris." In 2014, the Brewery Ommegang
            created a beer called "Valar Morghulis," with each cork fire-branded
            with the response.
          </p>
        </div>

        <div class='Question'>
          <p class='Question-prompt'>
            Besides dragonglass, what is the only other substance capable of
            defeating White Walkers?
          </p>
          <img class='Question-image' src='https://i.imgur.com/m0u5VrG.jpg' />

          <div class='Question-options'>
            <button onClick={() => onWrong()}>1. Weirwood</button>
            <button onClick={() => onWrong()}>2. Wildfire</button>
            <button onClick={() => onCorrect()}>3. Valyrian steel</button>
            <button onClick={() => onWrong()}>4. Snowballs</button>
          </div>

          <p class='Question-explanation'>
            Valyrian Steel is not only exceptionally sharp, strong and free of
            maintenance, but is also capable of taking down an immortal White
            Walker. The metal is easily identified by its distinctive rippled
            pattern.
          </p>
        </div>

        <div class='Question'>
          <p class='Question-prompt'>
            Which Stark family direwolf received the penalty for Joffrey being
            bitten?
          </p>
          <img class='Question-image' src='https://i.imgur.com/QUkikLL.jpg' />

          <div class='Question-options'>
            <button onClick={() => onWrong()}>1. Ghost</button>
            <button onClick={() => onCorrect()}>2. Lady</button>
            <button onClick={() => onWrong()}>3. Nymeria</button>
            <button onClick={() => onWrong()}>4. Summer</button>
          </div>

          <p class='Question-explanation'>
            After the direwolf Nymeria flees into the woods following a
            defensive attack against Prince Joffrey, Queen Cersei Lannister took
            her wrath out on the sister wolf, Lady.
          </p>
        </div>

        <div class='Question'>
          <p class='Question-prompt'>
            What was the name of Ned Stark's greatsword?
          </p>
          <img class='Question-image' src='https://i.imgur.com/opChkVP.jpg' />

          <div class='Question-options'>
            <button onClick={() => onCorrect()}>1. Ice</button>
            <button onClick={() => onWrong()}>2. Oathkeeper</button>
            <button onClick={() => onWrong()}>3. Widow's Wail</button>
            <button onClick={() => onWrong()}>4. Northguard</button>
          </div>

          <p class='Question-explanation'>
            Ice was the official sword of the Lord of Winterfell, forged from
            Valyrian steel and handed down over the ages. After being used to
            behead Ned Stark at the end of Season 1, it was subsequently melted
            down to forge two new swords – the Oathkeeper and Widow's Wail.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
