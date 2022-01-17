import React, { useState, useEffect } from "react";
import "./Edit.css";
import "../../utilities.css";
import { NewSocial, NewStatus, NewAvatar } from "../modules/NewPostInput.js";
import SocialCard from "../modules/SocialCard.js";

import { get } from "../../utilities";

const Edit = (props) => {
  const [status, setStatus] = useState("");
  const [avatar, setAvatar] = useState("");
  const [social, setSocial] = useState("");

  const addStatus = (statusObj) => {
    setStatus(statusObj);
  };

  const addAvatar = (avatarObj) => {
    setAvatar(avatarObj);
  };

  const addSocial = (socialObj) => {
    setSocial(socialObj);
  };

  const [user, setUser] = useState([]);

  useEffect(() => {
    get(`/api/user`, { userid: props.user }).then((userObj) => {
      setUser(userObj);
    });
  }, []);

  return (
    <>
    <div className = "columnContainer">
      <div className = "columnItem box">
          <h1 className = "boxHeader"> socials </h1>
          {props.user && (
            <SocialCard
              type="linkedIn"
              user={props.user}
            />
          )}
          &nbsp;
          {props.user && (
            <SocialCard
              type="facebook"
              user={props.user}
            />
          )}
          &nbsp;
          {props.user && (
            <SocialCard
              type="instagram"
              user={props.user}
            />
          )}
          &nbsp;
          {props.user && (
            <SocialCard
              type="phoneNumber"
              user={props.user}
            />
          )}
      </div>
      <div className = "columnItem box">
            <h1 className = "boxHeader"> account info </h1>
            {props.user && (
              <NewStatus addNewStatus={addStatus} defaultText="Your status" user={props.user} />
            )}
            &nbsp;
            {props.user && (
              <NewAvatar addNewAvatar={addAvatar} defaultText="Your avatar URL" user={props.user} />
            )}
      </div>
    </div>
      {/* <div className="wrapper">
          <div className="columnItem">
            <div className="rowContainer">
              <div className="rowItem">
                <div className="edit-Avatar">
                  <img src="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2Zyb2ctMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5MH19fQ==" />
                </div>
              </div>
              <div className="rowItem">
                <button>DONE EDITING</button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Edit;
