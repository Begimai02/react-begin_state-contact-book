import React from "react";

const Ex2 = (props) => {
  console.log(props);
  return (
    <div>
      <i>
        {props.third} - {props.first} = {props.second}
      </i>
    </div>
  );
};

export default Ex2;
