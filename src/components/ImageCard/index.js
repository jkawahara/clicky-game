import React from "react";
import "./style.css";

function ImageCard(props) {
  return (
    <div role="img" aria-label="click item" className="click-item shake" style={{ backgroundImage: `url(${props.image})` }}>
    </div>
  );
}

export default ImageCard;
