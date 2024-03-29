import { useState,useEffect } from "react";
function Slideshow(props) {
    return (
      <div className="project-image-box">
        {props.images.map((image, index) => (
            <img
              src={image}
              className="slide"
              alt={index}
            />
        ))}
      </div>
    );
}
export default Slideshow;
