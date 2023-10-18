import React, { useState } from 'react';
import './App.css';

import Button from './components/Button/Button.js';
import Card from './components/Card/Card.js';
import BoxedText from './components/BoxedText/BoxedText.js';
import Modal from './components/Modal/Modal.js';

function App() {

  const [counter, setCounter] = useState(0);
  const [showingModal, setShowingModal] = useState(false);

  function doIncrement() {
    setCounter(counter + 1);
  }

  function showModal() {
    setShowingModal(true);
  }

  function hideModal() {
    setShowingModal(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Component Library</h1>
      </header>
      <div className="App-library">
        <div>
          <h1>Buttons</h1>

          <Button onClick={() => console.log('Button 1')}>
            Button 1
          </Button>

          <Button type="gray" onClick={() => console.log('Button 2')}>
            Button 2
          </Button>

          <Button type="primary" onClick={() => console.log('Button 3')}>
            Button 3
          </Button>
        </div>

        <div>
          <h1>Cards</h1>

          <Card title="Example Card">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            ante quam, lobortis a auctor lacinia, ultricies in elit.</p>
          </Card>

          <Card title="Card With Image" image="https://i.imgur.com/qviVh.jpg">
            <p>Nulla sem velit, consectetur sagittis ligula et, pellentesque
            aliquam dolor.</p>
          </Card>

        </div>
      </div>

      <div className="App-library">
        <div>
          <h1>Your stuff</h1>
          <Button onClick={() => console.log('Button 4')}>
            Button 4
          </Button>

          <Button type="gray" onClick={() => console.log('Button 5')}>
            Button 5
          </Button>

          <Card title={counter} buttonText="Count" onButtonClick={doIncrement}>
            <p>Click to Increment</p>
          </Card>
        </div>
      </div>


      <div className="App-library">
        <div>
          <h1>Your stuff</h1>
          <BoxedText>
            <p>Boxed text example</p>
            <p>More text</p>
          </BoxedText>
          <BoxedText type="lightondark">
            <p>Light on dark text example</p>
            <p>More text</p>
          </BoxedText>
        </div>
      </div>

      <div className="App-library">
        <div>
          <h1>More stuff</h1>
          <Button onClick={showModal}>
            Show Modal
          </Button>
        </div>
      </div>

      {
        showingModal ? (
          <Modal onDismiss={hideModal}>
            <p>Modal contents...</p>
            <p>More text</p>
          </Modal>
        ) : null
      }
    </div>
  );
}

export default App;
