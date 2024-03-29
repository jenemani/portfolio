import "../CSS/App.css";
import { Link } from "react-router-dom";
//import { useState } from "react";
function Home() {
  return (
    <div className="body">
      <div className="play-around">
        <img
          className="play-images"
          alt="title slide for stupid fucking bird"
          src="./Assets/drafting.png"
        />
      </div>
      {/* <div className="home-buttons">
        <Link className="home-button" to="/portfolio/[sic]">
          <div className="home-hover">
            <h1 className="hover-text">[SIC]</h1>
          </div>
          <img
            className="home-images"
            alt="title slide for [sic]"
            src="./Assets/sic1.JPG"
          />
        </Link>
        <Link className="home-button" to="/portfolio/psychopsychotic">
          <div className="home-hover">
            <h1 className="hover-text">PSYCHOPSYCHOTIC</h1>
          </div>
          <img
            className="home-images"
            alt="title slide for psychopsychotic"
            src="./Assets/psycho2.jpg"
          />
        </Link>
        <Link className="home-button" to="/portfolio/stupidfkingbird">
          <div className="home-hover">
            <h1 className="hover-text">STUPID FUCKING BIRD</h1>
          </div>
          <img
            className="home-images"
            alt="title slide for stupid fucking bird"
            src="./Assets/stupid5.png"
          />
        </Link>
        <Link className="home-button" to="/about">
          <div className="home-hover-special">
            <h1 className="hover-text">about</h1>
          </div>
        </Link>
      </div> */}
    </div>
  );
}
export default Home;
