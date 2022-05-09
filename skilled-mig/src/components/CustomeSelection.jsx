import React, {useState} from "react";

const CustomeSelection = (props) => {
  const [value, setValues] = useState('default value');

  const handleChange = (e) =>{
      setValues(e.target.value)
      console.log(e.target.value)
      sendData();
  }
  const sendData = () =>{
    props.getData(value);
    alert("called")
  }
  return (
    <div>
      <label className="inputLabel">
        {props.label} *
        <select onClick={handleChange}>
          <option value={props.label}>-- {props.label} --</option>
            {
                // (()=>{
                //     switch(props.label){
                //         case 'Nationality':
                //             return props.option;
                //         case 'Country of Residence':
                //             return props.option;
                //         default: 
                //         return <option>{props.option}</option>
                // }})()
                props.option
            }
        </select>
      </label>
      {/* {value && <div style={{ marginTop: 20, lineHeight: '25px' }}>
        <div><b>Selected Value: </b> {value}</div>
      </div>} */}
    </div>
  );
};

export default CustomeSelection;
