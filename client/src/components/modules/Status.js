import React from "react";
import { Link } from "@reach/router";

const Status = (props) => {
  return (
    <div className = "statusText">
      {props.content}
    </div>
  );
};

export default Status;
