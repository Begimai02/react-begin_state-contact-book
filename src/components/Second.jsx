import React from "react";

const Second = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Second</h2>
      <mark>
        {" "}
        {props.one} + {props.two} = {props.result}
      </mark>
    </div>
  );
};

export default Second;
