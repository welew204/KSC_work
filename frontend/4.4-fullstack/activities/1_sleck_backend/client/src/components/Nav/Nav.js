import React, { Component } from 'react';
import './Nav.css';

import logo from './logo.svg';
import starFilled from '../ChatMessage/star_filled.svg';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <img src={logo} className="Nav-logo" alt="sleck" />

        <div># {this.props.selectedChannel}</div>

        <div className="Nav-starredCount">
          {this.props.starCount}
          <img src={starFilled} alt="Star" />
        </div>
      </div>
    );
  }
}

export default Nav;
