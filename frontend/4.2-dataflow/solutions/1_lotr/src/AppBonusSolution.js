import React from 'react';
import './App.css';

import CharacterCard from './components/CharacterCard/CharacterCard.js';
import CharacterCardGroup from './components/CharacterCardGroup/CharacterCardGroup.js';
import characterInfo from './data/characterInfo.js';

function App() {

  return (
    <div className="App">
      <h1>The Fellowship of the Ring</h1>
      <CharacterCardGroup>
        {
          characterInfo.map(info => (
            <CharacterCard {...info} />
          ))
        }
      </CharacterCardGroup>
    </div>
  );
}

export default App;
