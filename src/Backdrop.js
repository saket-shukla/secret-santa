import React from "react";
import "./Backdrop.css";

const Backdrop = ({ children }) => {
  return (
      <div style={{overflow: 'auto'}}>{children}</div>
  );
};

export default Backdrop;
