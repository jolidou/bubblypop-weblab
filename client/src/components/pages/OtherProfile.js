import { get } from "../../utilities.js";
import React, { useState, useEffect, useRef } from "react";
import OtherProfileCard from "../modules/OtherProfileCard.js";

import "../../utilities.css";
import "./Profile.css";

const OtherProfile = (props) => {
  const [user, setUser] = useState("");
  const [status, setStatus] = useState("");
  const [avatar, setAvatar] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [contacts, setContacts] = useState([]);
  const [bubbleCount, setBubbleCount] = useState(0);

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
    get(`/api/socialMedia`, { user: props.user, type: "phone" }).then((phoneNumberObj) => {
      setPhoneNumber(phoneNumberObj);
    });
  }, []);

  useEffect(() => {
      get(`/api/contact`, { user: props.user}).then((contactObjs) => {
        setContacts(contactObjs);
        setBubbleCount(contactObjs.length);
      });
  }, []);

  // let linkedInURL = "https://www.linkedin.com/in/" + linkedIn.content;
  // let facebookURL = "https://www.facebook.com/" + facebook.content;
  // let instagramURL = "https://www.instagram.com/" + instagram.content;

  return (
    <>
      <div>
        <OtherProfileCard
          // userId={user._id}
          userId = {props.user}
          name={user.name}
          avatarURL={avatar.avatarURL}
          status={status.content}
          display={props.display}
          bubbleCount={bubbleCount}
          members={contacts}

          linkedInURL = {"https://www.linkedin.com/in/" + linkedIn.content}
          facebookURL = {"https://www.facebook.com/" + facebook.content}
          instagramURL = {"https://www.instagram.com/" + instagram.content}
          phoneNumber = {phoneNumber.content}

        />
      </div>
    </>
  );
};

export default OtherProfile;
