import React from 'react';
import './StatuePanel.css';

import statueImage from './statue.jpg';

function StatuePanel(props) {
  return (
    <div className="StatuePanel">
      <h1 className="StatuePanel-title">
        {props.title}
      </h1>
      <img src={statueImage} alt="Statue" />
      <div className="StatuePanel-info">
        <p>The future is now.</p>

        {props.children}
      </div>
    </div>
  );
}

export default StatuePanel;
