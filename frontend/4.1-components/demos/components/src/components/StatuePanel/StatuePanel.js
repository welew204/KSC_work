import React from 'react';
import './StatuePanel.css';

import statueImage from './statue.jpg';

function StatuePanel() {
  return (
    <div className="StatuePanel">
      <h1 className="StatuePanel-title">
        This is the StatuePanel component.
      </h1>
      <img src={statueImage} alt="Statue" />
      <div className="StatuePanel-info">
        <p>The future is now.</p>
      </div>
    </div>
  );
}

export default StatuePanel;
