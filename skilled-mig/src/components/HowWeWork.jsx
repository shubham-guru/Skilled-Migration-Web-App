import React from "react";
import "./css/Howwework.css";
import Footer from "./Footer";
import Swiper from "./Swiper";

const HowWeWork = () => {
  return (
    <>
      <div className="box">
      <div align="center" style={{backgroundColor: "#fff"}}>
        <div style={{display: "flex"}}>
          <div style={{width: "50%", textAlign: "right"}}>
            <h2 className="subHeading" style={{backgroundColor: "#fff", color: "#000"}}>HOW W</h2>
          </div>
          <div style={{width: "50%", textAlign: "left"}}>
            <h2 className="subHeading" style={{backgroundColor: "#fff", color: "#000"}}>E WORK</h2>
          </div>
          </div>
      </div>
        <p>
          At Visa Immigration, we provide multiple visa and relocation services
          for Skilled Immigration, Investors, Student Visas, Visit Visa’s,
          Permanent Residency and Business. Our consultants have a wealth of
          experience across the board and we ensure a seamless relocation
          journey.
        </p>

        <div align="center" style={{backgroundColor: "#fff"}}>
        <div style={{display: "flex"}}>
          <div style={{width: "50%", textAlign: "right"}}>
            <h2 className="subHeading">LET's TALK ABO</h2>
          </div>
          <div style={{width: "50%", textAlign: "left"}}>
            <h2 className="subHeading" style={{backgroundColor: "#fff", color: "#000"}}>UT THE SPECIFICS :</h2>
          </div>
          </div>
      </div>

      <Swiper/>
      <Footer/>
      </div>
    </>
  );
};
export default HowWeWork;
