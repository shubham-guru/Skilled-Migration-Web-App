import React from "react";
import "./css/About.css";
import Footer from "./Footer";

const About = () => {
    return(
        <>
        <div>
        <div align="center">
          <div style={{display: "flex"}}>
          <div style={{width: "50%", textAlign: "right"}}>
            <h2 className="subHeading" style={{backgroundColor: "#fff", color: "#000"}}>ABOU</h2>
          </div>
          <div style={{width: "50%", textAlign: "left"}}>
            <h2 className="subHeading" style={{backgroundColor: "#fff", color: "#000"}}>T US</h2>
          </div>
          </div>

          <div className="innerDiv" style={{width: "50%", alignItems: "center"}}>
            <p className="aboutContent">
              <span style={{ color: "#d1783c" }}>Skilled Migration</span> is the leading skilled 
              immigration consultants globally with it’s head office in India branch office in UAE and 
              Australia. We are commited to serving individuals with a passion for career growth and to 
              better their skills and future in the Middle East, USA, Canada and Australia. Skilled 
              Migration has  a team of experts who are hardworking and determined to deliver a 
              customised relocation solution based on the requirements of the client who want to 
              secure their prospects. We assist professionals, Business Expansion individuals or 
              Citizenship by investment for HNIs.
            </p>
          </div>
        </div>

        <div style={{display: "flex"}}>
          <div style={{width: "50%", textAlign: "center"}}>
            <h2 className="subHeading">-MISSION-</h2>
            <p className="decsp">Our Mission is to provide quality driven seamless study, travel and immigration services to 
                our clients</p>
          </div>
          <div style={{width: "50%", textAlign: "center"}}>
            <h2 className="subHeading" style={{backgroundColor: "#fff", color: "#000"}}>-VISION-</h2>
            <p className="decsp" style={{backgroundColor: "#fff", color: "#000"}}>We envision to facilitate our clients with reliable and transparent immigration services 
                and help them secure a better career and lifestyle in offshore countries.</p>
          </div>
          </div>
          <Footer />
        </div>
        </>
    );
}
export default About;