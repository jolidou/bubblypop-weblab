import React, {useEffect, useState} from "react";
import { get } from "../../utilities";

const BubbleCard = (props) => {
    const [avatar, setAvatar] = useState([]);
    const [status, setStatus] = useState("");
    
    const updateStatus = (statusUpdate) => {
        setStatus(statusUpdate);
    };

    useEffect(() => {
        get("/api/status", { user: props.user, content: props.content }).then((statusObj) => {
            setStatus(statusObj.content);
        });
        get("/api/avatar", { avatarURL: props.avatarURL }).then((statusObj => {
            setAvatar(statusObj.avatar);
        }))
    }, []);

    return (
        <div>
            {/* <Avatar
                userId={props.userId}
                avatarURL={props.avatarURL}
            />
            {props.user && (
              <NewStatus addNewStatus={updateStatus} defaultText="Your status" user={props.user} />
            )} */}
            {props.content}
            {props.creator_id}
        </div>
    );
};

export default BubbleCard;