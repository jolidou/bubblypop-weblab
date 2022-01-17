import { get } from "../../utilities.js";
import React, { useState, useEffect, useRef } from "react";
import ProfileCard from "../modules/ProfileCard.js";

import "../../utilities.css";
import "./Profile.css";

const Profile = (props) => {
  const [user, setUser] = useState("");
  const [status, setStatus] = useState("");
  const [avatar, setAvatar] = useState("");

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

  useEffect(() => {
    get(`/api/avatar`, { user: props.user }).then((avatarObj) => {
      setAvatar(avatarObj);
    });
  }, []);

  return (
    <>
      <div>
        <ProfileCard
          userId={user._id}
          name={user.name}
          avatarURL={avatar.avatarURL}
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
