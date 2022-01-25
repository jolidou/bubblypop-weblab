import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import NavBar from "./modules/NavBar.js";
import NotFound from "./pages/NotFound.js";
import Profile from "./pages/Profile.js";
import BubblePage from "./pages/BubblePage.js";
import Edit from "./pages/Edit.js";
import Home from "./pages/Home.js";
import Logout from "./pages/Logout.js";
// import Navigation from "./modules/Navigation.js";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

// import CSS files
import "../utilities.css";
import "./App.css";

/**
 * Define the "App" component
 */
const App = () => {
  const [userId, setUserId] = useState(undefined);
  const [user, setUser] = useState("");
  const [contacts, setContacts] = useState([]);

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
      setUser(user._id)
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  const handleLogout = () => {
    setUserId(undefined);
    post("/api/logout");
  };

  if (userId) {
    return (
      <>
        {/* <Navigation handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} /> */}
        <div className = "navContainer">
        <NavBar className = "navContainer" path="/" handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} />
        </div>
        <div className="App-container">
          <Router>
            <Home path="/" />
            {userId && <Profile path="/profile/" user={userId} />}
            {userId && <Profile path="/other-profile/:user" />}
            {userId && <BubblePage path="/bubblepage/" user={userId} />}
            {userId && <Edit path="/edit-profile/" user={userId} />}
            <NotFound default />
          </Router>
        </div>
      </>
    );
  } else {
    return (
      <>
        {/* <Navigation handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} /> */}
        <div>
        <div className = "navContainer">
          <NavBar path="/" handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} />
        </div>
        <div className="App-container">
          <Router>
            <Home path="/" />
            <Logout path="/logout/" handleLogin={handleLogin} />
            <NotFound default />
          </Router>
        </div>
         </div>
      </>
    );
  }
};

export default App;
