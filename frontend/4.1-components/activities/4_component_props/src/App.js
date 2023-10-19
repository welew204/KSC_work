import React, { useState } from "react";
import "./App.css";

import Button from "./components/Button/Button.js";
import Card from "./components/Card/Card.js";
import BoxText from "./components/BoxText/BoxText";

function App() {
  const [counter, setCounter] = useState(0);

  function handleChildClick() {
    console.log("Sup biznasty?!");
  }

  function handleCounter() {
    setCounter((p) => p + 1);
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Component Library</h1>
      </header>
      <div className='App-library'>
        <div>
          <h1>Buttons</h1>

          <Button onClick={() => console.log("Button 1")}>Button 1</Button>

          <Button type='gray' onClick={() => console.log("Button 2")}>
            Button 2
          </Button>

          <Button type='primary' onClick={() => console.log("Button 3")}>
            Button 3
          </Button>
        </div>

        <div>
          <h1>Cards</h1>

          <Card title='Example Card'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              ante quam, lobortis a auctor lacinia, ultricies in elit.
            </p>
          </Card>

          <Card
            title='Card With Image'
            buttonText='Farts!'
            onButtonClick={handleChildClick}
            image='https://i.imgur.com/qviVh.jpg'>
            <p>
              Nulla sem velit, consectetur sagittis ligula et, pellentesque
              aliquam dolor.
            </p>
          </Card>
        </div>
      </div>

      <div className='App-library'>
        <div>
          <h1>Your stuff</h1>
          <p>
            <em>As you complete the activities, add in your own stuff here!</em>
          </p>
          <BoxText>Hey friend....I'm a box of text, aka a BoxText</BoxText>
          <Button type='primary' onClick={() => console.log("Button 4")}>
            Button 4
          </Button>
          <Button type='gray' onClick={() => console.log("Button 5")}>
            Button 5
          </Button>
          <Card
            title='Counter!'
            buttonText='click me daddy'
            onButtonClick={handleCounter}>
            {counter}
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
