import React from 'react';
import './css/maintenance.css';
import logo from "../images/logo.png";

const Maintenance = () => {
  return (
    <div className='maintenance'>
        <img src={logo} alt="logo"/>
        <div>
        <h1>COMING SOON !</h1>
        <h4>The site is under maintenance</h4>
        </div>
     
    </div>
  )
}

export default Maintenance