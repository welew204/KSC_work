import React from 'react';
import './CharacterCardGroup.css';

function CharacterCardGroup(props) {
  return (
    <div className="CharacterCardGroup">
      {props.children}
    </div>
  );
}

export default CharacterCardGroup;
