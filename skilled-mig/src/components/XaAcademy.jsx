import React, { useState, useEffect } from "react";
import "./css/academy.css";
import vectorBg from "../images/vector.jpg";
import Courses from "./Courses";
import XA_logo from "../images/XA ACADEMY.png";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import cart from "../images/icons/cart.png";

const XaAcademy = () => {
  const [data, setData] = useState({
    head: "",
    descp: "",
    name: "",
  });

  useEffect(() => {
    setData({
      ...data,
      head: "Expand your career opportunities with Python",
      descp:
        "Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to both beginners and advanced developers alike.",
      name: "Python",
    });
  }, []);

  const handlePython = () => {
    setData({
      ...data,
      head: "Expand your career opportunities with Python",
      descp:
        "Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to both beginners and advanced developers alike.",
      name: "Python",
    });
  };
  const handleExcel = () => {
    setData({
      ...data,
      head: "Analyze and visualize data with Excel",
      descp:
        "Take a Microsoft Excel course from Udemy, and learn how to use this industry-standard software. Real-world experts will show you the basics like how to organize data into sheets, rows and columns, and advanced techniques like creating complex dynamic formulas. Both small businesses and large companies use Excel to turn their raw data into actionable insights.",
      name: "Excel",
    });
  };
  const handleWeb = () => {
    setData({
      ...data,
      head: "Build websites and applications with Web Development",
      descp:
        "The world of web development is as wide as the internet itself. Much of our social and vocational lives play out on the internet, which prompts new industries aimed at creating, managing, and debugging the websites and applications that we increasingly rely on.",
      name: "Web Development",
    });
  };
  const handleJs = () => {
    setData({
      ...data,
      head: "Grow your software development skills with JavaScript",
      descp:
        "JavaScript is a text-based computer programming language used to make dynamic web pages. A must-learn for aspiring web developers or programmers, JavaScript can be used for features like image carousels, displaying countdowns and timers, and playing media on a webpage. With JavaScript online classes, you can learn to build interactive web applications, choose the best framework, and work with other programming languages like HTML and CSS.",
      name: "JavaScript",
    });
  };
  const handleData = () => {
    setData({
      ...data,
      head: "Lead data-driven decisions with Data Science",
      descp:
        "Data science application is an in-demand skill in many industries worldwide — including finance, transportation, education, manufacturing, human resources, and banking. Explore data science courses with Python, statistics, machine learning, and more to grow your knowledge. Get data science training if you’re into research, statistics, and analytics.",
      name: "Data Science",
    });
  };
  const handleAws = () => {
    setData({
      ...data,
      head: "Become an expert in cloud computing with AWS Certification",
      descp:
        "Prep for your AWS certification with an AWS course on Udemy. Learn the fundamentals of AWS such as working with a serverless platform, the various frameworks, security and more. With these courses, you’ll build the valuable skills you need to implement cloud initiatives — and open up new career opportunities. If you want to become an AWS developer, we’ve got the course for you.",
      name: "AWS Certification",
    });
  };
  const handleDrawing = () => {
    setData({
      ...data,
      head: "Expand your creative skillset with Drawing",
      descp:
        "Want to start drawing for fun or take your craft to the next level? Explore our online drawing classes and learn pencil drawing, figure drawing, cartoon drawing, character drawing for cartoons and anime, illustration, sketching, shading and more. Take an overview course on the fundamentals of drawing or zero in on an area you’d like to improve with a specialized course. We’ve got tons of options to get — and keep — you going.",
      name: "Drawing",
    });
  };
  return (
    <div className="workBox">
      <div className="menu">
        <ul type="none">
          <li>
            <img src={XA_logo} alt="xa_logo" />
          </li>
         
         
          <div className="innerMenu">
          <li>
            <div className="search__container">
              <input
                className="search__input"
                type="text"
                placeholder="Search"
              />
            </div>
          </li>
          <li>
            <a href="#">Study on XA Academy</a>
          </li>
            <li>
              <a href="#">
                <img src={cart} alt="cart" style={{width: "40px"}}/>
              </a>
            </li>
            <li>
              <button className="xaButton">LOG IN</button>
            </li>
            <li>
              <button
                className="xaButton"
                style={{ backgroundColor: "#000", color: "#fff" }}
              >
                SIGN UP
              </button>
            </li>
          </div>
        </ul>
      </div>
      <div className="innerBox" style={{ backgroundImage: `url(${vectorBg})` }}>
        <div>
          <h1>Expand your skills — for less</h1>
          <p>
            Learn toward new opportunities. Courses start at just ₹490. Ends
            March 9.
          </p>
        </div>
      </div>

      <div className="coursesBox">
        <h1>A broad selection of courses</h1>
        <p>
          Choose from 183,000 online video courses with new additions published
          every month
        </p>
        <div>
          <ul>
            <li>
              <NavLink to="#" onClick={handlePython}>
                Python
              </NavLink>
            </li>
            <li>
              <NavLink to="#" onClick={handleExcel}>
                Excel
              </NavLink>
            </li>
            <li>
              <NavLink to="#" onClick={handleWeb}>
                Web Development
              </NavLink>
            </li>
            <li>
              <NavLink to="#" onClick={handleJs}>
                JavaScript
              </NavLink>
            </li>
            <li>
              <NavLink to="#" onClick={handleData}>
                Data Science
              </NavLink>
            </li>
            <li>
              <NavLink to="#" onClick={handleAws}>
                AWS Certification
              </NavLink>
            </li>
            <li>
              <NavLink to="#" onClick={handleDrawing}>
                Drawing
              </NavLink>
            </li>
          </ul>
        </div>
        <Courses head={data.head} descp={data.descp} name={data.name} />
      </div>
      <Footer />
    </div>
  );
};
export default XaAcademy;
