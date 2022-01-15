import React, { useState, useEffect } from "react";
import "./NotFound.css";
import "../../utilities.css";

const NotFound = (props) => {
  return (
    <div class = "rainbow">
            <p>Oops! We can't find the page you're looking for :(</p>
            <div className = "pinkCircle" />
            <div className = "turqCircle" />
            <div className = "yellowCircle" />
            <div className = "lightPinkCircle" />
          </div>
  );
};

export default NotFound;
