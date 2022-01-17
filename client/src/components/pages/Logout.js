import React, { useState, useEffect } from "react";
import "./Logout.css";
import "../../utilities.css";

const Logout = (props) => {
  return (
    <div className="rainbow overlay">
      <p className = "popMessage">You've been logged out! Please log in again to continue!</p>
      <div className="circle pink" />
      <div className="circle turq" />
      <div className="circle yellow" />
      <div className="circle lightPink" />
    </div>
  );
};

export default Logout;
