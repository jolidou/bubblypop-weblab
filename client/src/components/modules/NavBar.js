import React, { Component, useState, useEffect } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { navigate, Link } from "@reach/router";
// import { useNavigate } from "@reach/router";

import "../../utilities.css";
import "./NavBar.css";

// const GOOGLE_CLIENT_ID = "810319868270-ctj3rbt6ivtlc61roqv8top021nmccvj.apps.googleusercontent.com";
const GOOGLE_CLIENT_ID = "810319868270-g5a4qu2k272mtcdu5b374h2qo1lrlm7p.apps.googleusercontent.com";

const NavBar = ({ userId, handleLogin, handleLogout }) => {
  // const navigate = useNavigate();
  return (
    <nav className="NavBar-container">
      <div className="NavBar-title u-inlineBlock">bubblypop</div>
      <div className="NavBar-linkContainer u-inlineBlock" >
        <Link to="/" className="NavBar-link">
          home
        </Link>
        {userId && (
          // <Link to={`/profile/${userId}`} className="NavBar-link">
          <Link to={`/profile/`} className="NavBar-link">
            profile
          </Link>
        )}
        {userId && (
          <Link to={`/edit-profile/`} className="NavBar-link">
            edit profile
          </Link>
        )}
        {userId && (
          <Link to={`/bubblepage/`} className="NavBar-link">
            bubble page
          </Link>
        )}
        {userId ? (
          // <Link to={"/logout/"} className="NavBar-link">
            <GoogleLogout
              clientId={GOOGLE_CLIENT_ID}
              buttonText="Logout"
              // onLogoutSuccess={handleLogout}
              onLogoutSuccess={(res) => {
              handleLogout(res);
              navigate("/logout/");
            }}
              onFailure={(err) => console.log(err)}
              className="NavBar-link NavBar-login"
            />
          // </Link>
        ) : (
          <GoogleLogin
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Login"
            // onSuccess={handleLogin}
            onSuccess={(res) => {
              handleLogin(res);
              navigate("/");
            }}
            onFailure={(err) => console.log(err)}
            className="NavBar-link NavBar-login"
          />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
