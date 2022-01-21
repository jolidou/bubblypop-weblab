import React, {useEffect, useState} from "react";
import { get } from "../../utilities";

import "./BubbleCard.css";
import "../../utilities.css";

const BubbleCard = (props) => {
    const [status, setStatus] = useState("");
    const [contacts, setContacts] = useState([])
    
    const updateStatus = (statusUpdate) => {
        setStatus(statusUpdate);
    };

    useEffect(() => {
        get("/api/status", { user: props.user, content: props.content }).then((statusObj) => {
            setStatus(statusObj.content);
        });
        get("/api/bubbles").then((contacts) => {
            setContacts(contacts);
        })
    }, []);


    function hideDiv() {
        document.getElementById("bubble").style.display="none";
    }
    const addContact = (newContact) => {
        setContacts([newContact].concat(contacts));
      };

    function popBubble() {
        hideDiv();
        addContact();
    }

    return (
        <div>
            <div id = "bubble" className="rowContainer">
                <div className = "rowItem"> {props.creator_id} </div>
                <div className = "rowItem"> {props.content} </div>
                <button className = "bubbleButton" onClick= {popBubble} > Pop!</button>
            </div>
        </div>
    );
};

export default BubbleCard;