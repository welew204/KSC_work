import React from "react";
import "./BoxText.css";

function BoxText(props) {
  let className = "BoxText";

  return <div className={className}>{props.children}</div>;
}

export default BoxText;
