import React from "react";

function Example1(props) {
  console.log(props);
  return (
    <div>
      <h2>
        My name is {props.name} {props.surname} 🍓
      </h2>
      <img src={props.image} alt={props.name} />
    </div>
  );
}

export default Example1;
