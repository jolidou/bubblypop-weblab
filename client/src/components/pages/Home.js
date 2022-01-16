import React, { useState, useEffect } from "react";
import { get } from "../../utilities";

import "../../utilities.css";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    get("/api/users").then((userObjs) => {
      setUsers(userObjs);
    });
  }, []);

  let usersMessage = null;
  const hasUsers = users.length !== 0;
  if (hasUsers) {
    usersMessage = <div>We have {users.length} users :)</div>;
  } else {
    usersMessage = <div>No users :(</div>;
  }

  return (
    <>
      <div>
        <h1>Home Page</h1>
        {usersMessage}
      </div>
    </>
  );
};

export default Home;
