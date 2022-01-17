import React, {useEffect, useState} from "react";
import { get } from "../../utilities";
import "./SocialCard.css";

import { NewSocial } from "./NewPostInput.js";

const SocialCard  = (props) => {
    const [social, setSocial] = useState("");
    const [text, setText] = useState("")

    const addSocial = (socialObj) => {
        setSocial(socialObj);
      };

    //Get current value of social, if it exists
    useEffect (() => {
        get("/api/socialMedia", {user: props.user , type: props.type}).then((socObj) => {
            setText(socObj.content)
          });
    })

    const currText = ((text === "") ? "N/A: Please input your information!" : text);

    return (
        <div className = "socialCard">
                <p className = "typeLabel"> {props.type}: </p>
                <NewSocial
                addNewSocial={addSocial}
                defaultText= { currText }
                type= {props.type}
                user= {props.user}
                />
        </div>
    );
 
}

export default SocialCard;