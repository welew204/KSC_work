import React from 'react';
import './Nav.css';

import logo from './logo.svg';

function Nav(props) {

  return (
    <div className="Nav">
      <img src={logo} className="Nav-logo" alt="sleck" />
    </div>
  );
}

export default Nav;
