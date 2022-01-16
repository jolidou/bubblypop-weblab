import React, { useState, useEffect } from "react";
import { get } from "../../utilities";

import "../../utilities.css";

const Home = (props) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    get("/api/users").then((userObjs) => {
      setUsers(userObjs);
    });

    // get(`/api/user`, { userid: props.userId }).then((userObj) => {
    //   setUser(userObj);
    //   console.log("HI");
    //   console.log(userObj);
    // });
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
        {/* {user.name} */}
      </div>
    </>
  );
};

export default Home;
