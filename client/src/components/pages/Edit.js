import React, { useState, useEffect } from "react";
import "./Edit.css";
import "../../utilities.css";

const Edit = (props) => {
  const [linkedIn, setLinkedin] = useState("");
  const [insta, setInsta] = useState("");
  const [fb, setFb] = useState("");
  const [phone, setPhone] = useState(0);

  //   useEffect(() => {
  //     document.title = "Edit/Create Profile";
  //     get(`/api/user`, { userid: props.userId }).then((userObj) => setUser(userObj));
  //   }, []);

  //   if (!user) {
  //     return (<div> Loading! </div>);
  //   }
  return (
    <>
      {/* <div className="Profile-avatar">
            <h1> {user.name} </h1>
         </div> */}
      <body>
        <div className="wrapper">
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
                    <div className="rowItem">SOCIALS</div>
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
        </div>
      </body>
    </>
  );
};

export default Edit;
