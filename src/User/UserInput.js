import React from "react";

const UserInput = props => {
  const styling = {
    "text-align": "center",
    color: "green"
  };

  return (
    <div>
      <input
        style={styling}
        type="text"
        onChange={props.updateUsername}
        value={props.username}
      />
    </div>
  );
};

export default UserInput;
