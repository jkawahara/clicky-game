// *** Include Modules: npm (react), style.css
import React from "react";
import "./style.css";

// Score component for message, current score, top score 
function Score(props) {
  return (
    <div>
      <h3 className="score">
        <ul>
          <li className="">{props.message}</li>
          <li>Score: {props.currentScore} - Top Score: {props.topScore}</li>        
        </ul>
      </h3>
    </div>
  );
}

// Export component for importing into App.js
export default Score;
