import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import NavBar from "./modules/NavBar.js";
import NotFound from "./pages/NotFound.js";
import Profile from "./pages/Profile.js";
import BubblePage from "./pages/BubblePage.js"

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

// import CSS files
import "../utilities.css"
import "./App.css";

/**
 * Define the "App" component
 */
const App = () => {
  const [userId, setUserId] = useState(undefined);

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        setUserId(user._id);
      }
    });
  }, []);

  const handleLogin = (res) => {
    console.log(`Logged in as ${res.profileObj.name}`);
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  const handleLogout = () => {
    setUserId(undefined);
    post("/api/logout");
  };

  return (
    <>
    <NavBar
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        userId={userId}
    />
      <Router>
        <Profile path="/profile/:userId" />
        <BubblePage path="/bubblepage/" userId={userId} />
        <NotFound default />
      </Router>
    </>
  );
};

export default App;
