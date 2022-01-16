import React, {useEffect, useState} from "react";
import { get } from "../../utilities";

import Status from "./Status.js";
import Avatar from "./Avatar.js";

const BubbleCard = (props) => {
    const [avatar, setAvatar] = useState([]);
    const [status, setStatus] = useState("");

    useEffect(() => {
        get("/api/status", { /* parent: props.avatarURL,  */parent: props.content}).then((avatar, status) => {
/*             setAvatar(avatar); */
            setStatus(status);
        });
    }, []);

    const updateStatus = (statusUpdate) => {
        setAvatar(statusUpdate);
    };
    return (
        <div>
{/*             <Avatar
                userId={props.userId}
                avatarURL={props.avatarURL}
            /> */}
            <Status
                content={props.content}
            />

        </div>
    );
};

export default BubbleCard;