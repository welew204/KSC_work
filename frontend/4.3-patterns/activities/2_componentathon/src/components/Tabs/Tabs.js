import React from "react";
import "./Tabs.css";

const Tabs = (props) => (
  <div className='Tabs'>
    {props.tabs.map((beatle, idx) => (
      <div
        key={idx}
        onClick={(e) => props.onChange(e.target.innerText)}
        className={
          beatle === props.currentTab
            ? "Tabs-tab Tabs-tab--selected"
            : "Tabs-tab"
        }>
        {beatle}
      </div>
    ))}
  </div>
);

export default Tabs;
