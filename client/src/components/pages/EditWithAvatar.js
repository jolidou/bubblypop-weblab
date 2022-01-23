import React, { useState, useEffect } from "react";
import "./Edit.css";
import "../../utilities.css";
import { NewSocial, NewStatus, NewAvatar } from "../modules/NewPostInputWithAvatar.js";
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

  // const encode = () => {
  //   var selectedfile = document.getElementById("myinput").files;
  //   if (selectedfile.length > 0) {
  //     var imageFile = selectedfile[0];
  //     var fileReader = new FileReader();
  //     fileReader.onload = function (fileLoadedEvent) {
  //       var srcData = fileLoadedEvent.target.result;
  //       var newImage = document.createElement("img");
  //       newImage.src = srcData;
  //       console.log(newImage.src);
  //       document.getElementById("dummy").innerHTML = newImage.outerHTML;
  //       // console.log(document.getElementById("dummy").innerHTML);
  //     };
  //     fileReader.readAsDataURL(imageFile);
  //   }
  // };

  return (
    <>
      <div className="columnContainer">
        <div className="columnItem box">
          <h1 className="boxHeader"> socials </h1>
          {props.user && <SocialCard type="linkedIn" user={props.user} />}
          &nbsp;
          {props.user && <SocialCard type="facebook" user={props.user} />}
          &nbsp;
          {props.user && <SocialCard type="instagram" user={props.user} />}
          &nbsp;
          {props.user && <SocialCard type="phone" user={props.user} />}
        </div>
        <div className="columnItem box">
          <h1 className="boxHeader"> account info </h1>
          {/* {props.user && (
              <NewStatus addNewStatus={addStatus} defaultText="Your status" user={props.user} name = {user.name} />
            )} */}
          &nbsp;
          {/* {props.user && (
            <NewAvatar addNewAvatar={addAvatar} defaultText="Your avatar URL" user={props.user} />
          )} */}
          {props.user && <NewAvatar addNewAvatar={addAvatar} user={props.user} />}
          &nbsp;
          {/* <input id="myinput" type="file" onChange={encode} />
          <div id="dummy"></div> */}
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
