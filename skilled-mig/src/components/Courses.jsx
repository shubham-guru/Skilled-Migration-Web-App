import React from "react";
import CourseDecsp from "./CourseDecsp";
import book1 from "../images/books1.jpg";
import book2 from "../images/books2.jpg";

const Python = (props) => {
  return (
    <div className="detailedBox">
      <h2>{props.head}</h2>
      <p>{props.descp}</p>
      <button className="button2">
        <b>Explore {props.name}</b>
      </button>

      <div>
      <CourseDecsp
        src={book1}
        head="Learn Python: The Complete Python Programming Course"
        author="Shubham Guru, Developer"
        price="$320"
      />

      <CourseDecsp
        src={book1}
        head="Learning Python for Data Analysis and Visualization"
        author="Dipti Sharma, Developer"
        price="$650"
      />

      <CourseDecsp
        src={book1}
        head="Python for Beginners - Learn Programming from scratch"
        author="Amit Trivedi, Developer"
        price="$500"
      />
      </div>
    </div>
  );
};

export default Python;
