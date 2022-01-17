import React, {useEffect, useState} from "react";
import { get } from "../../utilities";

import "./BubbleCard.css";
import "../../utilities.css";

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

    function hideDiv() {
        document.getElementById("bubble").style.display="none";
    }

    return (
        <div>
            <div id = "bubble" className="Card-container">
                {props.creator_id}   ||   {props.content}
                <div>
                    <button onClick= {hideDiv} >Pop!</button>
                </div>
            </div>
        </div>
    );
};

export default BubbleCard;