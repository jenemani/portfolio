
import "../CSS/App.css";
import "./Contact"
//import { Outlet, Link } from "react-router-dom";



function Menu() {



  return (
    <>
      <div className="menu">
        <h1 className="menuHeader">
          Isaac<span className="triangle"> &#9699;</span>
          <br />
          <span className="lastName"> Jenemann</span>
        </h1>
        <a className="menuButton" href="#about">
          about
        </a>
        <a className="menuButton" href="#recent">
          recent
        </a>
        <a className="menuButton" href="#contact">
          contact
        </a>
        <span className="padding"></span>
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