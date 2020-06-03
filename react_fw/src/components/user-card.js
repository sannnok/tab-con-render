import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import JsxParser from "react-jsx-parser";

const PersonCard = ({ person, textareaValue }) => {
  let container = document.getElementById("template");

  useEffect(() => {
    container = container ? container : document.getElementById("template");

    ReactDOM.render(
      <JsxParser
        bindings={{
          person: person,
          myEventHandler: () => {},
        }}
        components={{}}
        jsx={textareaValue}
      />,
      container
    );
  }, [textareaValue, person]);

  return (
    <div className="card-container">
      <h3>Person Contact Card</h3>
      <div id="template"></div>
    </div>
  );
};

export default PersonCard;
