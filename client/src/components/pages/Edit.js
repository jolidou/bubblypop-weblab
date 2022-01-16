import React, { useState, useEffect } from "react";
import "./Edit.css";
import "../../utilities.css";
import { NewSocial } from "../modules/NewPostInput.js";

const Edit = (props) => {
  const [linkedIn, setLinkedin] = useState("");
  const [insta, setInsta] = useState("");
  const [fb, setFb] = useState("");
  const [phone, setPhone] = useState("");
  const[social, setSocial] = useState([]);

  //   useEffect(() => {
  //     document.title = "Edit/Create Profile";
  //     get(`/api/user`, { userid: props.userId }).then((userObj) => setUser(userObj));
  //   }, []);

//   if (!user) {
//     return (<div> Loading! </div>);
//   }

  const addLinkedin =((socialObj) => {
    setLinkedin(socialObj)
  });
  const addInsta =((socialObj) => {
    setInsta(socialObj)
  });

  const addFb =((socialObj) => {
    setFb(socialObj)
  });

  const addPhone =((socialObj) => {
    setPhone(socialObj)
  });


  return (
    <>
        {/* <div className="Profile-avatar">
            <h1> {user.name} </h1>
         </div> */}
        <div className = "wrapper" >
            <div className = "columnContainer" >
                <div className = "columnItem">
                    <div className = "rowContainer">
                        <div className = "rowItem">
                            ACCOUNT INFO
                            <div className = "rowContainer">
                                    <span>
                                        <input type = "text" name = "username" />
                                        <input type = "text" name = "username" />
                                    </span>
                            </div>
                        </div>
                        <div className = "rowItem">
                                <div className = "rowContainer">
                                        <div className = "rowItem">
                                            SOCIALS
                                            {props.userId && <NewSocial 
                                              addNewSocial = {addLinkedin}
                                              defaultText = "Your linkedIn URL"
                                              type = "linkedIn"
                                              userId = {props.userId}
                                            />
                                          }
                                          linkedIn
                                        </div>

                                        <div className = "rowItem">
                                            {props.userId && <NewSocial 
                                              addNewSocial = {addInsta}
                                              defaultText = "Your Instagram URL"
                                              type = "Instagram"
                                              userId = {props.userId}
                                            />
                                          }
                                          insta
                                        </div>

                                        <div className = "rowItem">
                                            {props.userId && <NewSocial 
                                              addNewSocial = {addFb}
                                              defaultText = "Your Facebook URL"
                                              type = "Facebook"
                                              userId = {props.userId}
                                            />
                                          }
                                          fb
                                        </div>

                                        <div className = "rowItem">
                                            {props.userId && <NewSocial 
                                              addNewSocial = {addPhone}
                                              defaultText = "Your Phone Number"
                                              type= "Phone"
                                              userId = {props.userId}
                                            />
                                          }
                                          phone
                                        </div>
                                        <div className = "rowItem">
                                            <input type = "text" name = "linkedIn" />
                                        </div>
                                        <div className = "rowItem">
                                            <input type = "text" name = "fb" />
                                        </div>
                                        <div className = "rowItem">
                                            <input type = "text" name = "instagram" />
                                        </div>
                                        <div className = "rowItem">
                                            <input type = "text" name = "phone" />
                                        </div>
                                </div>
                        </div>
                        </div>
                    </div>
                    <div className = "columnItem">
                        <div className = "rowContainer">
                                <div className = "rowItem">
                                    <div className = "edit-Avatar">
                                        <img src = "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2Zyb2ctMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5MH19fQ==" />
                                    </div>
                                </div>
                            <div className = "rowItem">
                                <button>DONE EDITING</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  );
};

export default Edit;
