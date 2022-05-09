import React from "react";
import "./css/Expertise.css";

const Expertise = (props) => {
  return (
    <>
      <div class="l-container">
        <div class="b-game-card">
          <div class="b-game-card__cover">
              <h4>{props.title}</h4>
              <img src={props.src} width="30px" alt="icons"/>
              <p>{props.data}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Expertise;
