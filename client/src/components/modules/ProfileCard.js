import React, {useEffect, useState} from "react";
import { get } from "../../utilities";

import BubbleCounter from "./BubbleCounter.js";/* 
import SocialMediaBlock from "./SocialMediaBluck.js"; */
import Status from "./Status.js";
import Avatar from "./Avatar.js";
import Contact from "./Contact.js";

import "./ProfileCard.css";
import "../../utilities.css";

/*
    userId = ID of current user
    avatarURL = URL of photo
    content = status
    display = display status (T/F) of each type of social media
    type = type of social media
    count = bubble count
    members = list of IDs of contacts
*/


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
    return (
        <div className="columnContainer">
            <div className="columnItem rowContainer">
                <Avatar
                    userId={props.userId}
                    avatarURL={props.avatarURL} 
                    className="rowItem"/>
                <div><h1>{props.name}</h1></div>
                <Status
                    content={props.content}
                    className="rowItem"/>
            </div>
{/*             <div>
                <SocialMediaBlock
                    userId={props.userId}
                    display={props.display}
                    type={props.type} />
            </div> */}
            <div className="columnItem rowContainer">
                <div><h1>Bubble Counter:</h1></div>
                <div>
                    <BubbleCounter
                        userId={props.userId}
                        count={props.bubbleCount}
                        className="rowItem"/>
                </div>
                <br></br>
                <div>
                    <h1>Contacts:</h1> <Contact
                    userId={props.userId}
                    members={props.members}
                    className="rowItem"/>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
}

export default ProfileCard;