import React from "react";

const UserOutput = props => {
  return (
    <div className="UserOutput">
      <p>Good morning {props.username}</p>
      <p>Today we will be jogging 5 miles!</p>
    </div>
  );
};

export default UserOutput;
