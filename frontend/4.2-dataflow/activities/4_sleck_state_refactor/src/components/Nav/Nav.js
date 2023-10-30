//import React, { useState } from 'react';
import React from "react";
import "./Nav.css";

/* import logo from './logo.svg';
import starFilled from '../ChatMessage/star_filled.svg'; */

function Nav(props) {
  return (
    <div className='Nav'>
      <img /* src={logo} */ className='Nav-logo' alt='sleck' />

      {/* TODO: These props are not getting set... */}
      <div># {props.selectedChannel}</div>

      <div className='Nav-starredCount'>
        {props.starCount}
        <img /* src={starFilled} */ alt='Star' />
      </div>
    </div>
  );
}

export default Nav;
