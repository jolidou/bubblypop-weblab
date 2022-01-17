import React, { useState, useEffect } from "react";
import "./NotFound.css";
import "../../utilities.css";

const NotFound = (props) => {
  return (
    <div className="rainbow overlay">
      <p className = "popMessage">Oops! We can't find the page you're looking for :(</p>
      <div className="circle pink" />
      <div className="circle turq" />
      <div className="circle yellow" />
      <div className="circle lightPink" />
    </div>
  );
};

export default NotFound;
