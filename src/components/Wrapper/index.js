// *** Include Modules: npm (react), style.css
import React from "react";
import "./style.css";

// Wrapper component for sub-components as children
function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

// Export component for importing into App.js
export default Wrapper;
