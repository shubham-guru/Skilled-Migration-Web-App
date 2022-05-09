import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import downArrow from "../../images/icons/down-arrow.png";
import "../css/NavBar.css";
import { ul } from "./navBar.js";

function Navbar() {
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

  return (
  
    <>
      <div>
        <nav className="black">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="logo" width="250px"/>
        </Link>
          <div className="underline"></div>

          <a className="link" onMouseEnter={() => ul(2)}>
            <span onClick={()=>setDropdown1(!dropdown1)}>Company</span></a>

            <a className="link" onMouseEnter={() => ul(1)} href="/howwework">How we Work</a>

            <a className="link" onMouseEnter={() => ul(0)}>
            <span onClick={()=>setDropdown2(!dropdown2)}>Services</span></a>
                 
          
        </nav>
        {dropdown2 ? <ul className="dropDown" type="none" style={{position: "absolute", right: "15em"}}>
              <li><a href="/study">Study</a></li>
              <li><a href="/work">Work</a></li>
              <li><a href="/academy">XA Academy</a></li>
        </ul> : null}

        {dropdown1 ? <ul className="dropDown" type="none">
          <li><a href="/about">About</a></li>
          <li><a href="/careers">Careers</a></li>
        </ul> : null}
      </div>
    </>
  );
}

export default Navbar;
