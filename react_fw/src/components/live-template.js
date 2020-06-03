import React, { useEffect, useState } from "react";
import "./live-template.scss";
import DEFAULT_TEMPLATE from "../constants/default-template";

const LiveTemplate = ({textareaValue, setTextareaValue}) => {

  useEffect(() => {
    setTextareaValue(DEFAULT_TEMPLATE)
  }, [])

  const handleChange = (event) => {
    setTextareaValue(event.target.value);
  };

  return (
    <div>
      <h3>Card Template</h3>
      <textarea value={textareaValue} onChange={handleChange} />
    </div>
  );
};

export default LiveTemplate;
