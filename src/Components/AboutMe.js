import '../CSS/App.css'
import { useState } from "react";
import Pdf from "../resume.pdf";


function AboutMe() {

  const [url, setUrl] = useState("./Assets/isaacDoodle.png");
  const handleMouseOver = event =>{
        event.currentTarget.style.color = "rgb(73, 179, 211)";
  }

  const handleImage = event =>{
      event.currentTarget.style.color = "rgb(73, 179, 211)";
      console.log(event.currentTarget.id);
      setUrl(event.currentTarget.id);

  }

  const handleMouseLeave = event => {
    event.currentTarget.style.color = "rgb(0, 0, 0)";
    setUrl("./Assets/isaacDoodle.png");
  }



  

  var imageStyle = {
        backgroundImage: "url(" + url + ")",
  };


  return (
    <div>
      <div className="about-body" style={imageStyle} id="about">
        <a className='anchor' id="about" href='#about'>
          <h3 className="header">ABOUT</h3>
        </a>
        <h2 className="about-text">
          Hi there, <br />
          I'm{" "}
          <span
            id="./Assets/isaac.png"
            onMouseOver={handleImage}
            onMouseLeave={handleMouseLeave}
          >
            Isaac
          </span>
          , a student at <br />{" "}
          <span onMouseOver={handleMouseOver}>Brown University</span>{" "}
          concentrating in{" "}
          <span onMouseOver={handleMouseOver}>Environmental Studies</span> and
          <span onMouseOver={handleMouseOver}> Computer Science</span>.

          <span className="tooSmall"> <br/><br/>To see more of my work please resize your browser.</span>
        </h2>
      </div>
      <div className="aboutButtons">
        <a
          className="aboutButton"
          rel="noreferrer noopener"
          target="_blank"
          href={Pdf}
        >resume</a>
        <a className="aboutButton" href="#recent">
          recent work
        </a>
      </div>
    </div>
  );
  }

export default AboutMe;