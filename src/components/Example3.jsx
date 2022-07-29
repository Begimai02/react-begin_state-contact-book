import React from "react";

const Example3 = (props) => {
  console.log(props);
  return (
    <div>
      <h2>
        My name is {props.user.name} {props.user.surname} ❄️
      </h2>
      <img width={300} src={props.user.image} alt={props.user.name} />
      <h3>My age is {props.user.age}</h3>
      <h3>My job is a {props.user.job}</h3>
      <h3>My gender is {props.user.gender}</h3>
    </div>
  );
};

export default Example3;
