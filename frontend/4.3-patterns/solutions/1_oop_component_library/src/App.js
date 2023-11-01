import React, { Component } from 'react';
import './App.css';

import Button from './components/Button/Button.js';
import Dropdown from './components/Dropdown/Dropdown.js';
import Modal from './components/Modal/Modal.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      counter2: 0,
      dropdownShowing: false,
      modalShowing: false,
    };

    this.hideDropdown = this.hideDropdown.bind(this);
    this.showDropdown = this.showDropdown.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onSecondButtonClick = this.onSecondButtonClick.bind(this);
  }

  // Required methods for showing and hiding dropdown
  hideDropdown() {
    this.setState({
      dropdownShowing: false,
    });
  }
  showDropdown() {
    this.setState({
      dropdownShowing: true,
    });
  }

  // Required methods for showing and hiding modal
  hideModal() {
    this.setState({
      modalShowing: false,
    });
  }
  showModal() {
    this.setState({
      modalShowing: true,
    });
  }

  onButtonClick() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  // New button counter
  onSecondButtonClick() {
    this.setState({
      counter2: this.state.counter2 + 1,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Component Library</h1>
        </header>
        <div className="App-library">

          {/* Challenge #1 */}
          <h1>Button example:</h1>
          <h4>{this.state.counter}</h4>
          <Button
              gotClicked={this.onButtonClick}
              buttonText="Click to increment"
            />

          {/* Challenge #2 */}
          {/*
            <p>Second counter: {this.state.counter2}</p>
            <Button
                favoriteColor="blue"
                gotClicked={this.onSecondButtonClick}
                buttonText="Click me"
              />
          */}


          {/* Challenge #3: Modal */}
          <h1>Modal example</h1>
          <Button
              gotClicked={this.showModal}
              buttonText="Show modal"
            />
          <Modal
            visible={this.state.modalShowing}
            title="Modal example"
            onDismiss={this.hideModal}>
          </Modal>


          {/* Challenge #4 & #5: Dropdown & moving button into dropdown */}
          <h1>Dropdown example:</h1>
          <Dropdown
            text={"See more"}
            show={this.state.dropdownShowing}
            onShow={this.showDropdown}
            onHide={this.hideDropdown}>
            <p>Second counter: {this.state.counter2}</p>
            <Button
                favoriteColor="blue"
                gotClicked={this.onSecondButtonClick}
                buttonText="Click me"
              />
          </Dropdown>
        </div>
      </div>
    );
  }
}

export default App;
