import React from "react";

const CustomeField = (props) => {
  const handleChange = (e) =>{
    alert(e.target.value)
  }
  return (
      <>
        <label className="inputLabel" onClick={handleChange}>
            {props.label} *
            <input type={props.type} placeholder={props.label} required />
        </label>
      </>
  );
};

export default CustomeField;
