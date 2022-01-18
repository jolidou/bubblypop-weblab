import React, { useState, useEffect } from "react";
import "./NotFound.css";
import "../../utilities.css";
import { Link } from "@reach/router";

const NotFound = (props) => {
  return (
    <div className="rainbow overlay">
      <p className = "popMessage">
        Oops! We can't find the page you're looking for :(
        <div>
          <Link to="/" className = "homeLink">
            Return to Home
          </Link>
        </div>
      </p>
      <div className="circle pink floating"/>
      <div className="circle turq floating" />
      <div className="circle yellow floating" />
      <div className="circle lightPink floating" />
    </div>
  );
};

export default NotFound;
