import React, { useState, useEffect } from "react";

const TestCard = (props) => {
  return (
    <>
      <h3>{props._id}</h3>
      <h3>{props.googleid}</h3>
      <h3>{props.name}</h3>
      <hr></hr>
    </>
  );
};

export default TestCard;
