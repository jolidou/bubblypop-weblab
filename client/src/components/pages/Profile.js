import { get } from "../../utilities.js";
import React, { useState, useEffect, useRef } from "react";
import ProfileCard from "../modules/ProfileCard.js";
import { NewTester } from "../modules/NewPostInput.js";

import "../../utilities.css";
import "./Profile.css";

const Profile = (props) => {
  const [user, setUser] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    get(`/api/user`, { userid: props.user }).then((userObj) => {
      setUser(userObj);
    });
  }, []);

  useEffect(() => {
    get(`/api/status`, { user: props.user }).then((statusObj) => {
      setStatus(statusObj);
    });
  }, []);

  // mostly placeholders
  return (
    <>
      <div>
        <ProfileCard
          userId={user._id}
          name={user.name}
          avatarURL="https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/2c/2e/77/2c2e7707-1585-be11-3f93-23c1a7d14258/source/256x256bb.jpg"
          content={status.content}
          display={props.display}
          bubbleCount="0"
          members={props.members} //TODO: link googleid of contacts-- add to api.js
        />
      </div>
    </>
  );
};

export default Profile;
