import React from "react";
import "./css/Careers.css";
import Footer from "./Footer";

const Careers = () => {
  return (
    <>
      <div align="center" style={{ backgroundColor: "#fff" }}>
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%", textAlign: "right" }}>
            <h2 className="subHeading" style={{ backgroundColor: "#fff", color: "#000" }}>CAR</h2>
          </div>
          <div style={{ width: "50%", textAlign: "left" }}>
            <h2
              className="subHeading"
              style={{ backgroundColor: "#fff", color: "#000" }}
            >
              EERS
            </h2>
          </div>
        </div>

        <div className="innerDiv">
          <p style={{width: "50%", fontFamily: "font-family: 'Lato', sans-serif;", marginRight: "5%"}}>
            <span style={{ color: "#d1783c" }}>Skilled Migration </span>
            is the leading skilled immigration consultants globally.
            Serving individuals with a passion for career growth and to better
            their skills & future in the Middle East, USA, Canada & Australia.
            Skilled Migration has a team of experts who are hardworking and
            deliver a customised relocation solution based on the requirements
            of the client We are on a journey of growth, and we want you to join
            this exciting journey with us. We are always looking for talent from
            all over the world to join our team. We have fantastic state of the
            art facilities, hardworking but friendly environment with ongoing
            training and opportunities for development. We are passionately
            committed to leading and shaping the future of the global Automotive
            repair Industry, when you join Skilled Migration, you join a team
            with a thirst for Innovation
          </p>

          <form action="#" autoComplete="off" className="careerForm">
              <input placeholder="Name *" type="text" required />
              <input placeholder="Email *" type="text" required />
              <input placeholder="Phone no. *" type="text" required />
              <textarea placeholder="Tell us about yourself *" type="text" required />
              <p>Tell us about your skills and how you can contribute in our company</p>
              <button className="button button--pan">
              <span>SUBMIT</span>
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Careers;
