import React, { useState } from "react";
import "./Tooltip.css"
const Tooltip = ({ children, text }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(true)}
    >
      {children}
     <div className={`tooltip ${visible ? "open" : ""}`} >
      {text}
      <div className="arrow"/>

     </div>
    </div>
  );
};

export default Tooltip;
