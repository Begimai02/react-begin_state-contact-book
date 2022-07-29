import React from "react";
import Second from "./Second";

const First = (props) => {
  console.log(props);
  return (
    <div>
      <h2>First</h2>
      <Second one={props.one} two={props.two} result={props.result} />
    </div>
  );
};

export default First;
