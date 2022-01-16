import React, {useEffect, useState} from "react";
import { get } from "../../utilities";

import BubbleCounter from "./BubbleCounter.js";
import Status from "./Status.js";
import Avatar from "./Avatar.js";
import Contact from "./Contact.js";

/*
    userId = ID of current user
    avatarURL = URL of photo
    content = status
    display = display status (T/F) of each type of social media
    type = type of social media
    count = bubble count
    members = list of IDs of contacts
*/


const ProfileCard = (props) => {
    const [avatar, setAvatar] = useState([]);
    const [status, setStatus] = useState("");

    useEffect(() => {
        get("/api/profile", { parent: props.avatarURL, parent: props.status}).then((avatar, status) => {
            setAvatar(avatar);
            setStatus(status);
        });
    }, []);

    const updateStatus = (statusUpdate) => {
        setStatus(statusUpdate);
    };
    return (
        <div>
            <div>
                <Avatar
                    userId={props.userId}
                    avatarURL={props.avatarURL}
                />
                <div>{props.name}</div>
                <Status
                    content={props.content}
                />
            </div>
            <div>
{/*                 <SocialMediaBlock 
                    userId={props.userId}
                    display={props.display}
                    type={props.type}
                /> */}
            </div>
            <div>
                <div>Bubble Counter:</div>
                <div>
                    <BubbleCounter 
                        userId={props.userId}
                        count={props.bubbleCount}
                    />
                </div>
            </div>
            <div>
                <Contact 
                    userId={props.userId}
                    members={props.members}
                />
            </div>
        </div>
    );
}

export default ProfileCard;