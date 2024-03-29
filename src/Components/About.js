import "../CSS/App.css";
import { useState } from "react";
import Pdf from "../isaacjenemann.pdf";

function About() {
  return (
    <div className="body" id="about">
      <div className="about-body">
        <div className="about-text">
          <p>
            <b>Isaac Jenemann</b> is a designer of sets and
            environments, occasionally a line cook and always a learner. He is
            from Burlington, Vermont and is currently based in Providence, Rhode
            Island. Isaac grew up acting in plays and musicals, and designed his
            first production as a favor for a friend. He hasn’t acted since.
            This background paired with practical experience in technical
            direction, carpentry and lighting design, informs Isaac’s work and
            allows a practical approach to using space, as a storyteller. He
            finds artistic inspiration in the everyday, and is constantly
            pondering how a chest might become a bed or a bunch of string, a
            forest. When not designing, you’ll probably find Isaac hiking up
            mountains, skiing down them, or both.
          </p>
          <button className="about-button">download resume</button>
        </div>
        <div className="about-image-box">
          <img className="about-image" src="./Assets/isaac.png" />
        </div>
      </div>
    </div>
  );
}

export default About;
