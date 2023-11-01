import React from 'react';
import './FieldSet.css';

// HINT: Add code here to show label, legend, placeholder, to set value,
// and register an onChange event
const FieldSet = props => (
  <div className="FieldSet">
    <div className="FieldSet-legend"></div>
    <div className="FieldSet-label"></div>
    <input type="text"
      placeholder=""
      value=""
      onChange=""
    />
  </div>
);

export default FieldSet;
