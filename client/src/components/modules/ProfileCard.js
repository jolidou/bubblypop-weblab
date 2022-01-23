import React, {useEffect, useState} from "react";
import { get } from "../../utilities";

/*import BubbleCounter from "./BubbleCounter.js"; 
import SocialMediaBlock from "./SocialMediaBluck.js"; */
import Status from "./Status.js";
import Avatar from "./Avatar.js";
import Contact from "./Contact.js";

import "./ProfileCard.css";
import "../../utilities.css";


function ProfileCard(props) {
    const [avatar, setAvatar] = useState([]);
    const [status, setStatus] = useState("");

    useEffect(() => {
        get("/api/profile", { parent: props.avatarURL, parent: props.status }).then((avatar, status) => {
            setAvatar(avatar);
            setStatus(status);
        });
    }, []);

    const updateStatus = (statusUpdate) => {
        setStatus(statusUpdate);
    };

    // TEST
/*     let element = ["hello"];

    let newArray = element.concat(props.contacts);
 */
    console.log(props.bubbleCount);
    console.log(props.members);

    return (
        
        <div className="columnContainer">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <div className="columnItem rowContainer">
                <Avatar
                    userId={props.userId}
                    avatarURL={props.avatarURL} 
                    className="rowItem"/>
                <div><h1>{props.name}</h1></div>
                <Status
                    content={props.content}
                    className="rowItem"/>
                &nbsp;
                <div>
                    <a href={props.linkedInURL} target="_blank" className="fa fa-linkedin"></a>
                    <a href={props.facebookURL} target="_blank" className="fa fa-facebook"></a>
                    <a href={props.instagramURL} target="_blank" className="fa fa-instagram"></a>
                    <a title={props.phoneNumber} className="fa fa-phone"></a>
                </div>
            </div>
            <div className="columnItem rowContainer">
                <div><h1>Bubble Counter:</h1></div>
                <div>
                    {props.bubbleCount}
                </div>
                <br></br>
                <div>
                    <h1>Contacts:</h1> 
                    <Contact
                    userId={props.userId}
                    members={props.members}
                    className="rowItem"/>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;