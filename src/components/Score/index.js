import React from "react";
import "./style.css";

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

export default Score;
