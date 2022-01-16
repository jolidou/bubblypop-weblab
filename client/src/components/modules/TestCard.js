import React, { useState, useEffect } from "react";

const TestCard = (props) => {
  return (
    <>
      {props._id}
      {props.googleid}
      {props.name}
    </>
  );
};

export default TestCard;
