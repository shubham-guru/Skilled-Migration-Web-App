import React, { useEffect, useState } from "react";
import bgVideo from "../videos/bgVideo.mp4";
import whoarewe from "../images/whoarewe.jpg";
import getintouch from "../images/getintouch.jpg";
import "./css/Index.css";
import Expertise from "./Expertise";
import customize from "../images/icons/customize.png";
import exam from "../images/icons/exam.png";
import hammer from "../images/icons/legal.png";
import target from "../images/icons/target.png";
import relation from "../images/icons/specialists.png";
import leftQuotes from "../images/left-quotes-sign.png";
import { counter } from "./js/Counter.js";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Home = () => {
  const [optionValue1, setOptionValue1] = useState("");
  const [optionValue2, setOptionValue2] = useState("");

  useEffect(() => {
    counter();
  }, []);

  // const handleSelect = (e) =>{
  //   setOptionValue(e.target.value);
  // }
  return (
    <>
      <div>
        <div className="heading_box">
          <h1 className="heading">
            Leading skilled Immigration <br /> Consultants Globally
          </h1>
          <div className="content__item">
            <button className="button button--pan">
              <span>FIND JOBS</span>
            </button>
            <button className="button button--pan">
              <a href="https://www.facebook.com/" style={{ color: "#fff" }}>
                <span>CONTACT US</span>
              </a>
            </button>
          </div>
        </div>

        <video className="videoTag" autoPlay loop muted>
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="counters">
          <div className="container">
            <div>
              <div className="addSign">
                <div className="counter" data-target="3">
                  0
                </div>
                <div>+</div>
              </div>
              <h2>Offices Globally</h2>
            </div>

            <div>
              <div className="addSign">
                <div className="counter" data-target="10">
                  0
                </div>
                <div>+</div>
              </div>
              <h2>Years of Immigration Experience</h2>
            </div>

            <div>
              <div className="addSign">
                <div className="counter" data-target="100">
                  0
                </div>
                <div>+</div>
              </div>
              <h2>Immigration Staff Working</h2>
            </div>

            <div>
              <div className="addSign" style={{ border: "none" }}>
                <div className="counter" data-target="30">
                  0
                </div>
                <div>+</div>
              </div>
              <h2>
                Residency and non-resisdency visa option for skilled, Business
                and investor categories
              </h2>
            </div>
          </div>
        </div>
        <div align="center">
          <p className="para">
            We Assist professionals, Business Expansion individuals or
            Citizenship by investment for HNIs.
          </p>
        </div>

        <div className="gap"></div>

        <div align="center" style={{ backgroundColor: "#fff" }}>
          <div style={{ display: "flex" }}>
            <div style={{ width: "50%", textAlign: "right" }}>
              <h2 className="subHeading">WHO W</h2>
            </div>
            <div style={{ width: "50%", textAlign: "left" }}>
              <h2
                className="subHeading"
                style={{ backgroundColor: "#fff", color: "#000" }}
              >
                E ARE
              </h2>
            </div>
          </div>

          <div className="innerDiv">
            <p>
              <span style={{ color: "#d1783c" }}>Skilled Migration</span> is the
              leading skilled immigration consultants globally. Serving
              individuals with a passion for career growth and to better their
              skills and future in the Middle East, USA, Canada and Australia.
              We have a team of experts who are hardworking and deliver a
              customised relocation solution based on the requirements of the
              client who want future career growth, we Assist professionals,
              Business Expansion individuals or Citizenship by investment for
              HNIs.
            </p>
            <img src={whoarewe} alt="who-we-are-pic" width="50%" />
          </div>
        </div>

        {/* <div className="gap"></div> */}

        <div align="center" style={{ backgroundColor: "#fff" }}>
          <div style={{ display: "flex" }}>
            <div style={{ width: "50%", textAlign: "right" }}>
              <h2 className="subHeading">OUR EXPE</h2>
            </div>
            <div style={{ width: "50%", textAlign: "left" }}>
              <h2
                className="subHeading"
                style={{ backgroundColor: "#fff", color: "#000" }}
              >
                RTISE
              </h2>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              backgroundColor: "#fff",
            }}
          ></div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              backgroundColor: "#fff",
            }}
          ></div>

          <div className="carousel">
            <input type="radio" name="position" defaultChecked />
            <input type="radio" name="position" />
            <input type="radio" name="position" />
            <input type="radio" name="position" />
            <input type="radio" name="position" />
            <main id="carousel">
              <div className="item">
                <Expertise
                  title="Customized Services"
                  src={customize}
                  data="The Skilled Migration team offers you inclusive immigration consultancy services, right from application pre-assessment to Visa filing and documentation assistance to Visa follow up till approval received."
                />
              </div>
              <div className="item">
                <Expertise
                  title="Accuracy"
                  src={target}
                  data="We ensure in being accurate on all the information provided to you in simple yet effective manner which is in coherence with your individual profile and understanding your case agreements and challenges."
                />
              </div>
              <div className="item">
                <Expertise
                  title="Legal"
                  src={hammer}
                  data="Under the guidance for approved ICCRC, MARA and OISC Lawyers, our immigration experts file your application for a successful outcome."
                />
              </div>
              <div className="item">
                <Expertise
                  title="IELTS Examiner"
                  src={exam}
                  data="We provide support directly from our IELTS Examiner who shares real-time examination tips and feedback according to the authentic Marking Criteria."
                />
              </div>
              <div className="item">
                <Expertise
                  title="Automotive Specialists"
                  src={relation}
                  data="We have strong relationships with OEMs and leading paint manufacturers for which we have multiple state of the art facilities within the Middle East, India and Australia."
                />
              </div>
              <main></main>
            </main>
          </div>
        </div>
        {/* <div className="gap"></div> */}
        <div className="quote">
          <div style={{ backgroundImage: `url(${leftQuotes})` }}></div>
          <p>
            You can’t go back and change the beginning, but you can start where
            you are and change the ending.
          </p>
          <span>~Anonymous</span>
        </div>
        <div className="searchBox">
          <div>
            <select onChange={(e) => setOptionValue1(e.target.value)}>
              <option value="">-- Select a Job Role --</option>
              <option value="Panel Beater">Panel Beater</option>
              <option value="Vehicle Painter">Vehicle Painter</option>
              <option value="Service Technician">Service Technician</option>
              <option value="Service Advisor">Service Advisor</option>
            </select>

            <select onChange={(e) => setOptionValue2(e.target.value)}>
              <option value="">-- Select Country --</option>
              <option value="USA">USA</option>
              <option value="Australia">Australia</option>
              <option value="Europe">Europe</option>
              <option value="Dubai">Dubai</option>
            </select>

            <Link to="/job" className="button button--pan">
              <span>FIND JOBS</span>
            </Link>
          </div>
        </div>

        <div align="center" style={{ backgroundColor: "#fff" }}>
          <div style={{ display: "flex" }}>
            <div style={{ width: "50%", textAlign: "right" }}>
              <h2 className="subHeading">GET IN</h2>
            </div>
            <div style={{ width: "50%", textAlign: "left" }}>
              <h2
                className="subHeading"
                style={{ backgroundColor: "#fff", color: "#000" }}
              >
                TOUCH
              </h2>
            </div>
          </div>
          <div className="innerDiv">
            <img src={getintouch} alt="who-we-are-pic" width="50%" />
            <form autoComplete="off">
              <input
                placeholder="Name"
                type="text"
                className="inputField"
                required
              />
              <br />
              <input
                placeholder="Email"
                type="email"
                className="inputField"
                required
              />
              <br />
              <textarea placeholder="Message" className="inputField" required />
              <br />
              <button className="button button--pan">
                <span>SUBMIT</span>
              </button>
            </form>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};
export default Home;
