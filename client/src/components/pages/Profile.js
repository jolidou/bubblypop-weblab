import { get } from "../../utilities.js";
import React, { useState, useEffect, useRef } from "react";
import ProfileCard from "../modules/ProfileCard.js";

import "../../utilities.css";
import "./Profile.css";

const Profile = (props) => {
  const [user, setUser] = useState("");
  const [status, setStatus] = useState("");
  const [avatar, setAvatar] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

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

  useEffect(() => {
    get(`/api/socialMedia`, { user: props.user, type: "linkedIn" }).then((linkedInObj) => {
      setLinkedIn(linkedInObj);
    });
  }, []);

  useEffect(() => {
    get(`/api/socialMedia`, { user: props.user, type: "facebook" }).then((facebookObj) => {
      setFacebook(facebookObj);
    });
  }, []);

  useEffect(() => {
    get(`/api/socialMedia`, { user: props.user, type: "instagram" }).then((instagramObj) => {
      setInstagram(instagramObj);
    });
  }, []);

  useEffect(() => {
    get(`/api/socialMedia`, { user: props.user, type: "phoneNumber" }).then((phoneNumberObj) => {
      setPhoneNumber(phoneNumberObj);
    });
  }, []);

  // let linkedInURL = "https://www.linkedin.com/in/" + linkedIn.content;
  // let facebookURL = "https://www.facebook.com/" + facebook.content;
  // let instagramURL = "https://www.instagram.com/" + instagram.content;

  return (
    <>
      <div>
        <ProfileCard
          userId={user._id}
          name={user.name}
          avatarURL={avatar.avatarURL}
          content={status.content}
          display={props.display}
          bubbleCount={props.bubbleCount}
          members={props.contacts}

          linkedInURL = {"https://www.linkedin.com/in/" + linkedIn.content}
          facebookURL = {"https://www.facebook.com/" + facebook.content}
          instagramURL = {"https://www.instagram.com/" + instagram.content}
          phoneNumber = {phoneNumber.content}

        />
      </div>
    </>
  );
};

export default Profile;
