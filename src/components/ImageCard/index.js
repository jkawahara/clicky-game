// *** Include Modules: npm (react), style.css
import React from "react";
import "./style.css";

// ImageCard component for character id, image, onClick
function ImageCard(props) {
  return (
    <div role="img" aria-label="click item" className="click-item shake" style={{ backgroundImage: `url(${props.image})` }} onClick={() => props.handleImageClick(props.id)}>
    </div>
  );
}

// Export component for importing into App.js
export default ImageCard;
