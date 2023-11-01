import React, { Component } from "react";
import "./App.css";

import Button from "./components/Button/Button.js";
import Dropdown from "./components/Dropdown/Dropdown.js";
import Modal from "./components/Modal/Modal.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      sec_counter: 0,
      modal: false,
      dropdown: false,
    };

    this.onButtonClick = this.onButtonClick.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    this.setState({
      dropdown: !this.state.dropdown,
    });
  }
  toggleModal() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  onButtonClick(which_counter) {
    if (which_counter === "counter") {
      this.setState({
        counter: this.state.counter + 1,
      });
    } else if (which_counter === "sec_counter") {
      this.setState({
        sec_counter: this.state.sec_counter + 1,
      });
    }
  }

  render() {
    //console.log(this.state.modal);
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Component Library</h1>
        </header>
        <div className='App-library'>
          {/*
            Challenge #1: Use the Button component to display a button that
            says "Click to increment" and increments the counter using
            onButtonClick
          */}

          <h1>Button example:</h1>
          <h4>{this.state.counter}</h4>
          <Button
            buttonText='Click to increment'
            gotClicked={() => this.onButtonClick("counter")}
          />

          <p>Second counter: {this.state.counter2}</p>

          <h1>Modal example</h1>
          <Button buttonText='Open Modal' gotClicked={this.toggleModal} />
          {this.state.modal ? (
            <Modal visible={this.state.modal} onDismiss={this.toggleModal}>
              <p>
                Modal ipsum dolor sit amet, consectetur adipiscing elit. Sed at
                metus id tellus vestibulum.
              </p>
            </Modal>
          ) : (
            void 0
          )}

          {/* Challenge #3: Use the Modal component */}

          {/* Challenge #4 & #5: Use the Dropdown component */}
          <h1>Dropdown example</h1>
          <Dropdown
            text="TODAY's PLAN"
            show={this.state.dropdown}
            gotClicked={this.toggleDropdown}
            onShow={this.toggleDropdown}
            onHide={this.toggleDropdown}>
            <li>Fun</li>
            <li>Shit</li>
            <li>All Day</li>
            <li>Bisch!</li>
            <Button
              buttonText='Click ME'
              gotClicked={() => this.onButtonClick("sec_counter")}
            />
            <p>{this.state.sec_counter}</p>
          </Dropdown>
        </div>
      </div>
    );
  }
}

export default App;
