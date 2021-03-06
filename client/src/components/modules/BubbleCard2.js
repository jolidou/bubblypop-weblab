import React, {useEffect, useState} from "react";
import { get, post } from "../../utilities";

import "./BubbleCard.css";
import "../../utilities.css";

const BubbleCard2 = (props) => {
    const [status, setStatus] = useState("");
    /* const [contacts, setContacts] = useState([])  */
    
    const updateStatus = (statusUpdate) => {
        setStatus(statusUpdate);
    };

//     useEffect(() => {
//         get("/api/status", { user: props.userId }).then((statusObj) => {
//             setStatus(statusObj.content);
//         });
// /*         get("/api/bubbles").then((contacts) => {
//             setContacts(contacts);
//         }); */
//     }, []);
    const [isHidden, setIsHidden] = useState(false);

    function hideDiv() {
        setIsHidden(true);
    }

    function popBubble() {
        hideDiv();
        const body = { user: props.userId, recipient: props.creator_id, recipient_name: props.name };
        // post("/api/contact", body).then();
        post("/api/contact", body).then((contact) => {
            // props.addNewBubble(status);
        });
    }

    return (
        <div>
            <div className="bubbleContainer" style={{display: isHidden ? "none" : "block"}}>
                <div className = "bubbleContent">
                    <p className = "bubbleUser"> {props.name} </p>
                    <div className = "bubbleStatus"> {props.content} </div>
                    <button className = "bubbleButton" onClick= {() => popBubble()} > Pop!</button>
                </div>
            </div>
        </div>
    );
};

export default BubbleCard2;