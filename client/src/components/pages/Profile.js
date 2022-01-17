import { get } from "../../utilities.js";
import React, { useState, useEffect, useRef } from "react";
import ProfileCard from "../modules/ProfileCard.js";
import { NewTester } from "../modules/NewPostInput.js";

import "../../utilities.css";
import "./Profile.css";

const Profile = (props) => {
  console.log("HI");
  console.log(props.user);

  const [user, setUser] = useState("");
  const [tester, setTester] = useState("");

  useEffect(() => {
    get(`/api/user`, { userid: props.user }).then((userObj) => {
      setUser(userObj);
    });
  }, []);

  const addTester = (testerObj) => {
    setTester(testerObj);
  };

  // mostly placeholders
  return (
    <>
      <NewTester addNewTester={addTester} defaultText="Tester" user={props.user} />
      <div>
        <ProfileCard
          userId={user._id}
          name={user.name}
          avatarURL="https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/2c/2e/77/2c2e7707-1585-be11-3f93-23c1a7d14258/source/256x256bb.jpg"
          content={user._id}
          display={props.display}
          bubbleCount="0"
          members={props.members} //TODO: link googleid of contacts-- add to api.js
        />
      </div>
    </>
  );
};

export default Profile;
