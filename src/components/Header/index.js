// *** Include Modules: npm (react), style.css
import React from "react";
import "./style.css";

// Header component for game header text (children)
function Header(props) {
  return <h1 className="header">{props.children}</h1>;
}

// Export component for importing into App.js
export default Header;
