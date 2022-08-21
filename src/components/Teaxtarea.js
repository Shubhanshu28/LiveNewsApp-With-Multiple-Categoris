import React from "react";
import { useState } from "react";

function Teaxtarea(props) {
  const [state, setState] = useState("Enter the text to convert");
  const updtValue = (event) => {
     const  value = '';
     setState(event.target.value);
    
    
  };

  const convertFun = () => {
    let afterconvert = state.toUpperCase();
    setState(afterconvert);
  };
  return (
    <>
      <div className="form-group">
        <h1>{props.heading}</h1>
        <label html for="Mybox">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="Mybox"
          rows="8"
          coloumns="4"
          value={state}
          onChange={updtValue}
        ></textarea>
      </div>
      <button className="main-btn " onClick={convertFun}>
        Click to conver uppercase
      </button>
    </>
  );
}

export default Teaxtarea;
