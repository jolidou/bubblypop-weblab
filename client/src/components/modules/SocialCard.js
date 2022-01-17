/* import React, { useState, useEffect } from "react";
import { NewSocial } from "./NewPostInput.js";
import { get, post } from "../../utilities";

const SocialCard = (props) => {
    const [social, setSocial] = useState("");
    const [socialContent, setSocialContent] = useState("");

    useEffect(() => {
      get("/api/socialMedia", { userId: props.user, type: props.type }).then((socialObj) => {
        setSocial(socialObj.content);
      });
    }, []);

    console.log ( {userId: props.userId} );
    return (
       // if (social) {
        <div>
            <span>
                { social }
                <button> Edit </button>
            </span>
            
        </div>

    // } else {
    //     <NewSocial
    //         userId = { props.userId }
    //         type = { props.type }
    //         addNewSocial = { props.addNewSocial }
    //     /> 
    // }

    )};

export default SocialCard;
 */