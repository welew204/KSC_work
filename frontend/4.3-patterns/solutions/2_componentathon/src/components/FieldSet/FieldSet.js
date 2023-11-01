import React from 'react';
import './FieldSet.css';

// HINT: Add code here to show label, legend, placeholder, to set value,
// and register an onChange event
const FieldSet = props => (
  <div className="FieldSet">
    <div className="FieldSet-legend">{props.legend}</div>
    <div className="FieldSet-label">{props.label}</div>
    <input type="text"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />

    {/*
      The "splat" operator is a shortcut to include ALL props. At some
      places it's very popular, yet at other workplaces they might not
      allow it, since it is too "implicit".
    */}
    {/*<input type="text" {...props} /> */}
  </div>
);

export default FieldSet;
