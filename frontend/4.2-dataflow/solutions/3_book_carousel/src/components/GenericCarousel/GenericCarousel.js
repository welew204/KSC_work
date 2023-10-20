import React, { useState } from 'react';
import './GenericCarousel.css';

import BoxSelector from '../BoxSelector/BoxSelector.js';

function GenericCarousel(props) {
  const [value, setValue] = useState(0);

  function onBoxChanged(newValue) {
    setValue(newValue);
    props.onChange(newValue);
  }

  // From: https://stackoverflow.com/questions/3746725/
  const count = props.children.length;
  const numberArray = Array.apply(null, {length: count}).map(Number.call, Number);

  // Get only the selected children by using filter
  const selectedChild = props.children
    .filter((child, index) => index === value);

  return (
    <div className="GenericCarousel">
      {selectedChild}

      <BoxSelector
        choices={numberArray}
        selectedValue={value}
        onSelectionChange={onBoxChanged}
      />

    </div>
  );
}

export default GenericCarousel;
