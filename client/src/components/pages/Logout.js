import React, { useState, useEffect } from "react";
// import GoogleLogin from "react-google-login";
import { Link } from "@reach/router";

import "./Logout.css";
import "../../utilities.css";

// const GOOGLE_CLIENT_ID = "810319868270-ctj3rbt6ivtlc61roqv8top021nmccvj.apps.googleusercontent.com";

const Logout = (props) => {
  return (
    <>
    <div className="rainbow overlay">
      <p className = "popMessage">
         You're logged out. Please log in to continue!
          <br></br>
          <Link to="/" className = "homeLink">
            Return to Login
          </Link>
      </p>
      <div className="circle pink floating"/>
      <div className="circle turq floating" />
      <div className="circle yellow floating" />
      <div className="circle lightPink floating" />
    </div>
      {/* <Link to="/">
        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          buttonText="Login"
          onSuccess={props.handleLogin}
          onFailure={(err) => console.log(err)}
          className="NavBar-link NavBar-login"
        />
      </Link> */}

      
      {/* <div className="rainbow overlay">
        <h1 className="popMessage">You've been logged out! Please log in again to continue!</h1>
        <div className="circle pink" />
        <div className="circle turq" />
        <div className="circle yellow" />
        <div className="circle lightPink" />
      </div> */}
    </>
  );
};

export default Logout;


