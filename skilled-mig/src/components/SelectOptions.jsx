import React, { useState } from 'react';


const SelectOptions = (props) => {

    const [age, setAge] = useState("");
  return (
    <>
        <select onChange={(e)=>setAge(e.target.value)}>
            <option value="">-- {props.title} --</option>
            <option value="1">{props.value[0]}</option>
            <option value="2">{props.value[1]}</option>
            <option value="3">{props.value[2]}</option>
        </select>
    </>
  )
}

export default SelectOptions;