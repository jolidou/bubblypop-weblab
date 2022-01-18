import React, { useState, useEffect } from "react";
import GoogleLogin from "react-google-login";
import { useNavigate } from "@reach/router";

import "./Logout.css";
import "../../utilities.css";

// const GOOGLE_CLIENT_ID = "810319868270-ctj3rbt6ivtlc61roqv8top021nmccvj.apps.googleusercontent.com";
const GOOGLE_CLIENT_ID = "810319868270-g5a4qu2k272mtcdu5b374h2qo1lrlm7p.apps.googleusercontent.com";

const Logout = ({ handleLogin }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="rainbow overlay">
        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          buttonText="Login"
          onSuccess={(res) => {
            handleLogin(res);
            navigate("/");
          }}
          onFailure={(err) => console.log(err)}
          className="NavBar-link NavBar-login"
        />
        <h1 className="popMessage">You've been logged out! Please log in again to continue!</h1>
        <div className="circle pink" />
        <div className="circle turq" />
        <div className="circle yellow" />
        <div className="circle lightPink" />
      </div>
    </>
  );
};

export default Logout;
