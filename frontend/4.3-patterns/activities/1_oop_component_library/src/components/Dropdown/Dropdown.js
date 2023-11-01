import React, { Component } from 'react';
import './Dropdown.css';

import Button from '../Button/Button.js';

class Dropdown extends Component {
  constructor() {
    super();
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  getUnicodeArrow() {
    if (this.props.show) {
      return " ↑";
    } else {
      return " ↓";
    }
  }

  onButtonClick() {
    if (this.props.show) {
      this.props.onHide();
    } else {
      this.props.onShow();
    }
  }

  render() {
    let dropdownStyle = {
      visibility: 'hidden',
      maxHeight: '0px',
    };

    if (this.props.show) {
      dropdownStyle = {
        visibility: 'visible',
        maxHeight: '1000px',
      };
    }

    return (
      <div className="Dropdown">
        <Button
          gotClicked={this.onButtonClick}
          buttonText={this.props.text + this.getUnicodeArrow()}
          />
        <div style={dropdownStyle} className="Dropdown-box">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Dropdown;
