import React from "react";

const Bottom = props => {
  return (
    <div>
      <h2>{props.data} from App.js</h2>
      <h3>passed down as 'props' to the 'Bottom' component</h3>
    </div>
  );
};

export default Bottom;
