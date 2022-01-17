import React, { useState, useEffect } from "react";
import "./Edit.css";
import "../../utilities.css";
import { NewSocial, NewStatus, NewAvatar } from "../modules/NewPostInput.js";

import { get } from "../../utilities";

const Edit = (props) => {
  const [linkedIn, setLinkedin] = useState("");
  const [insta, setInsta] = useState("");
  const [fb, setFb] = useState("");
  const [phone, setPhone] = useState("");
  const [social, setSocial] = useState([]);
  const [status, setStatus] = useState("");
  const [avatar, setAvatar] = useState("");

  const addLinkedin = (socialObj) => {
    setLinkedin(socialObj);
  };
  const addInsta = (socialObj) => {
    setInsta(socialObj);
  };

  const addFb = (socialObj) => {
    setFb(socialObj);
  };

  const addPhone = (socialObj) => {
    setPhone(socialObj);
  };

  const addStatus = (statusObj) => {
    setStatus(statusObj);
  };

  const addAvatar = (avatarObj) => {
    setAvatar(avatarObj);
  };

  const [user, setUser] = useState([]);

  useEffect(() => {
    get(`/api/user`, { userid: props.user }).then((userObj) => {
      setUser(userObj);
    });
  }, []);

  return (
    <>
      {props.user && (
        <NewStatus addNewStatus={addStatus} defaultText="Your status" user={props.user} />
      )}
      &nbsp;
      {props.user && (
        <NewAvatar addNewAvatar={addAvatar} defaultText="Your avatar URL" user={props.user} />
      )}
      &nbsp;
      {props.user && (
        <NewSocial
          addNewSocial={addLinkedin}
          defaultText="Your LinkedIn"
          type="linkedIn"
          user={props.user}
        />
      )}
      &nbsp;
      {props.user && (
        <NewSocial
          addNewSocial={addFb}
          defaultText="Your Facebook"
          type="facebook"
          user={props.user}
        />
      )}
      &nbsp;
      {props.user && (
        <NewSocial
          addNewSocial={addInsta}
          defaultText="Your Instagram"
          type="instagram"
          user={props.user}
        />
      )}
      &nbsp;
      {props.user && (
        <NewSocial
          addNewSocial={addPhone}
          defaultText="Your Phone Number"
          type="phoneNumber"
          user={props.user}
        />
      )}
      {/* <div className="wrapper">
        <div className="columnContainer">
          <div className="columnItem">
            <div className="rowContainer">
              <div className="rowItem">
                ACCOUNT INFO
                <div className="rowContainer">
                  <span>
                    <input type="text" name="username" />
                    <input type="text" name="username" />
                  </span>
                </div>
              </div>
              <div className="rowItem">
                <div className="rowContainer">
                  <div className="rowItem">
                    SOCIALS
                    {props.userId && (
                      <NewSocial
                        addNewSocial={addLinkedin}
                        defaultText="Your linkedIn URL"
                        type="linkedIn"
                        userId={props.userId}
                      />
                    )}
                    linkedIn
                  </div>

                  <div className="rowItem">
                    {props.userId && (
                      <NewSocial
                        addNewSocial={addInsta}
                        defaultText="Your Instagram URL"
                        type="Instagram"
                        userId={props.userId}
                      />
                    )}
                    insta
                  </div>

                  <div className="rowItem">
                    {props.userId && (
                      <NewSocial
                        addNewSocial={addFb}
                        defaultText="Your Facebook URL"
                        type="Facebook"
                        userId={props.userId}
                      />
                    )}
                    fb
                  </div>

                  <div className="rowItem">
                    {props.userId && (
                      <NewSocial
                        addNewSocial={addPhone}
                        defaultText="Your Phone Number"
                        type="Phone"
                        userId={props.userId}
                      />
                    )}
                    phone
                  </div>
                  <div className="rowItem">
                    <input type="text" name="linkedIn" />
                  </div>
                  <div className="rowItem">
                    <input type="text" name="fb" />
                  </div>
                  <div className="rowItem">
                    <input type="text" name="instagram" />
                  </div>
                  <div className="rowItem">
                    <input type="text" name="phone" />
                  </div>
                </div>
              </div>
            </div>
          </div>
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
