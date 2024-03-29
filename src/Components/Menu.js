import "../CSS/App.css";
import "../CSS/Body.css";
import "../CSS/Mobile.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
//import { Outlet, Link } from "react-router-dom";

function Menu() {
  const [open, setOpen] = useState(false);
  const [prev, setPrev] = useState({});
  var curSub = 0;

  function highlight(target) {
    var tar = target;
    if (prev.className != null) {
      prev.className = prev.className.replaceAll("-selected", "");
    }

    if (
      tar.className === "menu-project-button" ||
      tar.className === "menu-project-button-selected"
    ) {
      document.getElementById("portfolio").className = "menu-button-selected";
      setOpen(true);
    } else {
      document.getElementById("portfolio").className = "menu-button";
      setOpen(false);
    }

    if (tar.id === "portfolio") {
      setOpen(true);
    }

    if (tar.id !== "header") {
      tar.className = tar.className + "-selected";
      setPrev(tar);
    }
  }

  return (
    <>
      <div className="menu">
        <Link
          className="menuHeader"
          id="header"
          onClick={(event) => highlight(event.target)}
          to="/"
        >
          Isaac<span className="label"> set design</span>
          <br />
          Jenemann
        </Link>
        <Link
          className="menu-button"
          id="about"
          onClick={(event) => highlight(event.target)}
          to="/about"
        >
          about
        </Link>
        <Link
          className="menu-button"
          id="portfolio"
          onClick={(event) => highlight(event.target)}
          to="/portfolio"
        >
          portfolio
        </Link>
        <Link
          className="menu-button"
          id="contact"
          to="/contact"
          onClick={(event) => highlight(event.target)}
        >
          contact
        </Link>
        {open ? (
          <div className="menu-project">
            <Link
              className="menu-project-button"
              id="0"
              to="/portfolio/[sic]"
              onClick={(event) => highlight(event.target)}
            >
              [sic]
            </Link>
            <br />
            <Link
              className="menu-project-button"
              id="1"
              to="/portfolio/psychopsychotic"
              onClick={(event) => highlight(event.target)}
            >
              PSYCHOPSYCHOTIC
            </Link>
            <br />
            <Link
              className="menu-project-button"
              id="2"
              to="/portfolio/intothewoods"
              onClick={(event) => highlight(event.target)}
            >
              Into the Woods
            </Link>
            <br />
            <Link
              className="menu-project-button"
              id="3"
              to="/portfolio/stupidfkingbird"
              onClick={(event) => highlight(event.target)}
            >
              Stupid Fucking Bird
            </Link>
            <br />
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Menu;

/**
 *        <a href="#about" className="menuButton" to="/">
          about me
        </a>
        <br />
        <a href="#work" className="menuButton" to="/">
          recent work
        </a>
        <br />
        <a href="#contact" className="menuButton" to="/">
          contact
        </a> 
 *  */
