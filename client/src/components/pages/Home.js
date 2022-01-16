import React, { useState, useEffect } from "react";
import TestCard from "../modules/TestCard.js";

import { get } from "../../utilities";

// import "../../utilities.css";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    get("/api/users").then((userObjs) => {
      setUsers(userObjs);
    });
  }, []);

  let usersList = null;
  const hasUsers = users.length !== 0;
  if (hasUsers) {
    usersList = users.map((userObj) => (
      <TestCard
        key={`TestCard_${userObj._id}`}
        _id={userObj._id}
        googleid={userObj.googleid}
        name={userObj.name}
      />
    ));
  } else {
    usersList = <div>No users!</div>;
  }

  return (
    <>
      <h1>Home Page</h1>
      {usersList}
    </>
  );
};

export default Home;
