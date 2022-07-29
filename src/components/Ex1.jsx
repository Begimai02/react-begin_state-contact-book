import React from "react";
import Ex2 from "./Ex2";

const Ex1 = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Ex1</h2>
      <Ex2 first={props.first} second={props.second} third={props.third} />
    </div>
  );
};

export default Ex1;
