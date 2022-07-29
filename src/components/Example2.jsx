import React from "react";

const Example2 = (props) => {
  console.log(props);
  return (
    <div>
      <h3>My age is {props.age}</h3>
      <h3>My job is a {props.job}</h3>
      <h3>My gender is {props.gender}</h3>
    </div>
  );
};

export default Example2;
