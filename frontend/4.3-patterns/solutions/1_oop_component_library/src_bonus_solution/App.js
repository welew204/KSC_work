import React, { useState } from 'react';
import './App.css';

import Button from './components/Button/Button.js';
import Dropdown from './components/Dropdown/Dropdown.js';
import Modal from './components/Modal/Modal.js';

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [dropdownShowing, setDropdownShowing] = useState(false);
  const [modalShowing, setModalShowing] = useState(false);

  // Required functions for showing and hiding dropdown
  function hideDropdown() {
    setDropdownShowing(false);
  }

  function showDropdown() {
    setDropdownShowing(true);
  }

  // Required functions for showing and hiding modal
  function hideModal() {
    setModalShowing(false);
  }

  function showModal() {
    setModalShowing(true);
  }

  function onButtonClick() {
    setCounter(counter + 1);
  }

  // New button counter
  function onSecondButtonClick() {
    setCounter2(counter2 + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Component Library</h1>
      </header>
      <div className="App-library">

        {/* Challenge #1 */}
        <h1>Button example:</h1>
        <h4>{counter}</h4>
        <Button
          gotClicked={onButtonClick}
          buttonText="Click to increment"
        />

        {/* Challenge #2 */}
        {/*
            <p>Second counter: {counter2}</p>
            <Button
                favoriteColor="blue"
                gotClicked={onSecondButtonClick}
                buttonText="Click me"
              />
          */}


        {/* Challenge #3: Modal */}
        <h1>Modal example</h1>
        <Button
          gotClicked={showModal}
          buttonText="Show modal"
        />
        <Modal
          visible={modalShowing}
          title="Modal example"
          onDismiss={hideModal}>
        </Modal>


        {/* Challenge #4 & #5: Dropdown & moving button into dropdown */}
        <h1>Dropdown example:</h1>
        <Dropdown
          text={"See more"}
          show={dropdownShowing}
          onShow={showDropdown}
          onHide={hideDropdown}>
          <p>Second counter: {counter2}</p>
          <Button
            favoriteColor="blue"
            gotClicked={onSecondButtonClick}
            buttonText="Click me"
          />
        </Dropdown>
      </div>
    </div>
  );
}

export default App;
