import React, { useState, useEffect } from "react";
import GoogleLogin from "react-google-login";
import { Link } from "@reach/router";

import "./Logout.css";
import "../../utilities.css";

const GOOGLE_CLIENT_ID = "810319868270-ctj3rbt6ivtlc61roqv8top021nmccvj.apps.googleusercontent.com";

const Logout = ({ handleLogin }) => {
  return (
    <>
      <Link to={"/profile/"}>
        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          buttonText="Login"
          onSuccess={handleLogin}
          onFailure={(err) => console.log(err)}
          className="NavBar-link NavBar-login"
        />
      </Link>
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
